import axios from "axios";

export const privateAxios = axios.create({
  baseURL: "http://localhost:3000/api/private",
  withCredentials: true,
});
export const publicAxios = axios.create({
  baseURL: "http://localhost:3000/api/public",
  withCredentials: true,
});
