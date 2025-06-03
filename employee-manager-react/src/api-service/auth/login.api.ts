import baseApi from "../api";
import type { LoginPayload, LoginReponse } from "./types";

export const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginReponse, LoginPayload>({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    
  }),
});

export const { useLoginMutation } = loginApi;
