import { api } from "config/axios";
const restUrl = "/api/v1";

const signUp = async (body: any) => {
  try {
    const res = await api.post(restUrl + "/auth/signup", body);
    return res.data;
  } catch (error) {
    return error;
  }
};

const signIn = async (body: any) => {
  try {
    const res = await api.post(restUrl + "/auth/signin", body);
    return res.data;
  } catch (error) {
    return error;
  }
};

export { signUp, signIn };
