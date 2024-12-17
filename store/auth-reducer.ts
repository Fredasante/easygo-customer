import { User, LoginResponse } from "@/repositories/auth-repository";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  userProfile: User | null;
  isVerified: boolean;
  isAuthenticated: boolean;
  userId: string | null;
  token: string | null;
  willVerifyMFACode: boolean;
  resendOtpToken: string | null;
}

const initialState: AuthState = {
  userProfile: null,
  isVerified: false,
  isAuthenticated: false,
  userId: null,
  token: null,
  willVerifyMFACode: false,
  resendOtpToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserProfile: (state, action: PayloadAction<User>) => {
      state.userProfile = action.payload;
      state.isVerified = action.payload.isVerified;
      state.userId = action.payload._id;
    },
    saveLoginResponse: (state, action: PayloadAction<LoginResponse>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.userProfile = action.payload.user;
      state.isVerified = action.payload.user.isVerified;
      state.userId = action.payload.user._id;
      state.willVerifyMFACode = action.payload.willVerifyMFACode;
      state.resendOtpToken = action.payload.resend_otp_token;
    },
    logout: (state) => {
      state.userProfile = null;
      state.isAuthenticated = false;
      state.isVerified = false;
      state.userId = null;
      state.token = null;
      state.willVerifyMFACode = false;
      state.resendOtpToken = null;
    },
  },
});

export const { saveUserProfile, saveLoginResponse, logout } = authSlice.actions;
export const authActions = authSlice.actions;
export type AuthActions = typeof authSlice.actions;

export default authSlice.reducer;
