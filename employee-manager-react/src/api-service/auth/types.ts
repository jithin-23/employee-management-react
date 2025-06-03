export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginReponse = {
  tokenType: string;
  accesstoken: string;
};
