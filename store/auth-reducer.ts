import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProfile {
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
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  userProfile: UserProfile | null;
  isVerified: boolean;
  userId: string | null;
  registrationError: string | null;
  verificationError: string | null;
}

const initialState: AuthState = {
  userProfile: null,
  isVerified: false,
  userId: null,
  registrationError: null,
  verificationError: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
      state.isVerified = action.payload.isVerified;
      state.userId = action.payload._id;
    },
    clearUserProfile: (state) => {
      state.userProfile = null;
      state.isVerified = false;
      state.userId = null;
    },
    setVerificationStatus: (
      state,
      action: PayloadAction<{ isVerified: boolean }>
    ) => {
      state.isVerified = action.payload.isVerified;
      state.verificationError = null;
    },
    setRegistrationError: (state, action: PayloadAction<string>) => {
      state.registrationError = action.payload;
    },
    setVerificationError: (state, action: PayloadAction<string>) => {
      state.verificationError = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export type AuthActions = typeof authSlice.actions;
export default authSlice.reducer;
