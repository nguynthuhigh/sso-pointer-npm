import axios, { AxiosInstance } from "axios";
import { PUBLIC_KEY } from "./public-key";
import { verify } from "jsonwebtoken";
export class PointerStrategy {
  private axiosInstance: AxiosInstance;
  private clientId: string;
  private clientSecret: string;
  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.axiosInstance = axios.create({
      baseURL: "https://oauth.pointer.io.vn",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async getAccessToken(code: string) {
    try {
      const response = await this.axiosInstance.post("/auth/access-token", {
        ...this,
        code,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error?.response?.data.message);
    }
  }
  async verifyAccessToken(token: string) {
    const payload = verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
    return payload;
  }
}
