import axios from "axios";
import { AxiosClient } from "./utils/client";
import AuthService from "./services/auth-service";
import { store } from "./store";
import { default as AuthRepo } from "./repositories/auth-repository";
import { authActions } from "./store/auth-reducer";

// client
const client = new AxiosClient(axios);

export const serverSideClient = new AxiosClient(axios, {
  headers: {
    "Content-Type": "application/json",
  },
});

// Repositories
const authRepository = new AuthRepo(client);

// services
const authService = new AuthService(authRepository, store, authActions);

const DI = {
  authService,
};

export default DI;
