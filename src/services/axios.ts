import axios from "axios";

const api = axios.create({
  baseURL: "https://server-admin.fibo.cloud/api",
});

export default api;
