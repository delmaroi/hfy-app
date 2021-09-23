/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from "react";
import UserService from "services/user.service";
import AuthService from "services/auth.service";
import Header from "components/Header";
import { Wrapper, Text } from "./styles";

export const Home = () => {
  const [content, setContent] = useState();
  const user = AuthService.getCurrentUser();

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          error.response?.data || error.message || error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <>
      <Header />

      <Wrapper>
        <div>Zalogowany {user.email}</div>
      </Wrapper>
    </>
  );
};

export default Home;
