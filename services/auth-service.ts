import { EnhancedStore } from "@reduxjs/toolkit";
import { COOKIE_KEY } from "../constants";

import { RootState } from "../store";
import { deleteCookie, getCookie } from "cookies-next";

import { AuthActions } from "@/store/auth-reducer";
import AuthRepository, {
  LoginPayload,
  RegisterPayload,
  VerifyEmailPayload,
} from "@/repositories/auth-repository";

export default class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private store: EnhancedStore<RootState>,
    private authActions: AuthActions
  ) {}

  async register(payload: RegisterPayload) {
    const res = await this.authRepository.register(payload);
    return res;
  }

  async verifyEmail(payload: VerifyEmailPayload) {
    const res = await this.authRepository.verifyEmail(payload);
    return res;
  }

  async login(payload: LoginPayload) {
    const res = await this.authRepository.login(payload);
    return res;
  }

  logoutUser() {
    deleteCookie(COOKIE_KEY);
    // deleteCookie(USER_TYPE_KEY);
  }

  isAuthTokenValid(accessToken: string) {
    // TODO: make an API call to validate cookie
    if (accessToken.length > 40) {
      // this.authRepository.verifyToken(accessToken)
      return true;
    }

    return false;
  }

  haveUserToken() {
    return !!getCookie(COOKIE_KEY);
  }
}
