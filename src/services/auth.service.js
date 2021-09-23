import axios from "axios";

const API_URL = "http://localhost:5000/v1/api/";

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
