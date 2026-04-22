import useTokenStore from "@/store";
import { api } from "../wrapper/fetch.wrapper";

api.interceptors.request.use((config) => {
  const token = useTokenStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getClients = async () => {
  return api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/clients`);
};