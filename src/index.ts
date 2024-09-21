import axios, { AxiosInstance } from "axios";
import { IApp } from "./types";

export class AuthPointer {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "api",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async getAccessToken(body: IApp) {
    try {
      const response = await this.axiosInstance.post(
        "/auth/access_token",
        body
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async getUser(accessToken: string) {
    try {
      const response = await this.axiosInstance.get("/user/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
