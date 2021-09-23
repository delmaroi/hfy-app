import React, { useState, useEffect } from "react";
import UserService from "services/user.service";
import Header from "components/Header";
import { Wrapper } from "./styles";

export const Home = () => {
  const [content, setContent] = useState();

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

      <Wrapper>Zalogowany</Wrapper>
    </>
  );
};

export default Home;
