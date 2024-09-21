"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPointer = void 0;
const axios_1 = require("axios");
class AuthPointer {
    constructor() {
        this.axiosInstance = axios_1.default.create({
            baseURL: "api",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    getAccessToken(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.post("/auth/access_token", body);
                return response.data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUser(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get("/user/profile", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                return response.data;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.AuthPointer = AuthPointer;
