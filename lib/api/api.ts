import { generateAxiosInstance } from "./axios-generator";

export const baseURL =
  process.env.REACT_APP_BACKEND_URL ?? `http://localhost:4001`;
const api = generateAxiosInstance(baseURL, true);
export default api;
