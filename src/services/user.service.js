/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "./constants";

const getPublicContent = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};

export default {
  getPublicContent,
};
