import axios from "axios";
import { SERVER_BASE_URL } from "../../../../config";

export const AxiosInstance = axios.create({
  //baseURL: "http://localhost:5000/api/",
  baseURL: `${SERVER_BASE_URL}api/`,
});
