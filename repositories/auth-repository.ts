import { ApiResponse } from "@/types";
import { AxiosClient } from "@/utils/client";

export interface User {
  _id: string;
  firstname: string;
  lastname: string | null;
  username: string | null;
  email: string;
  phone: string | null;
  usertype: string;
  gender: string;
  isVerified: boolean;
  isDeleted: boolean;
  isSocial: boolean;
  mfaActivated: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterPayload {
  firstname: string;
  lastname: string | null;
  email: string;
  username?: string | null;
  phone?: string | null;
  password: string;
}

export interface RegisterResponse {
  message: string;
  code: string;
  data: {
    user: User;
  };
}

export interface VerifyEmailPayload {
  user_id: string;
  code: string;
}

export interface VerifyEmailResponse {
  message: string;
  code: string;
  data: {
    user: User;
  };
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  resend_otp_token: string | null;
  token: string;
  willVerifyMFACode: boolean;
}

export default class AuthRepository {
  BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  constructor(private client: AxiosClient) {}

  async register(payload: RegisterPayload) {
    const res = await this.client.post<ApiResponse<RegisterResponse>>(
      `${this.BASE_URL}/users/create/use-email-password`,
      payload
    );
    return res.data;
  }

  async verifyEmail(payload: VerifyEmailPayload) {
    const res = await this.client.patch<ApiResponse<VerifyEmailResponse>>(
      `${this.BASE_URL}/users/create/verify-user`,
      payload
    );
    return res.data;
  }

  async login(payload: LoginPayload) {
    const res = await this.client.post<ApiResponse<LoginResponse>>(
      `${this.BASE_URL}/users/login/use-email-password`,
      payload
    );
    return res.data;
  }
}
