import axios, { AxiosInstance } from "axios";
import { IApp } from "./types";

export class PointerStrategy {
  private axiosInstance: AxiosInstance;
  private clientId: string;
  private clientSecret: string;
  private callbackUrl: string;
  constructor({ clientId, clientSecret, callbackUrl }: IApp) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.callbackUrl = callbackUrl;
    this.axiosInstance = axios.create({
      baseURL: "https://oauth.pointer.io.vn",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async getAccessToken(code: string) {
    const response = await this.axiosInstance.post("/auth/access_token", {
      ...this,
      code,
    });
    return response.data;
  }
  async getUser(accessToken: string) {
    const response = await this.axiosInstance.get("/user/profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
}
