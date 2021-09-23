/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";
import { API_URL } from "./constants";

const signup = ({
  firstname,
  lastname,
  email,
  password,
  password2,
  datebirth,
}) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  return axios
    .post(
      API_URL + "signup",
      {
        firstname,
        lastname,
        email,
        password,
        password2,
        datebirth,
      },
      config
    )
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const signin = ({ email, password }) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  return axios
    .post(
      API_URL + "signin",
      {
        email,
        password,
      },
      config
    )
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const signout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  signup,
  signin,
  signout,
  getCurrentUser,
};
