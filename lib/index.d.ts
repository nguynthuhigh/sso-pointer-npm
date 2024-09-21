import { IApp } from "./types";
export declare class AuthPointer {
    private axiosInstance;
    constructor();
    getAccessToken(body: IApp): Promise<any>;
    getUser(accessToken: string): Promise<any>;
}
