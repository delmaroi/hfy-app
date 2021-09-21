import axios from "axios";

type UserSubmitForm = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  datebirth: string;
};

const API_URL = "http://localhost:5000/v1/api/";

const signup = (firstname, lastname, email, password, datebirth) => {
  return axios.post(API_URL + "signup", {
    firstname,
    lastname,
    email,
    password,
    datebirth,
  });
};

const signin = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
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
