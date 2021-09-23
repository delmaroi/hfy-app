/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserService from "services/user.service";
import AuthService from "services/auth.service";
import Header from "components/Header";
import { Wrapper, Text } from "./styles";

export const Home = () => {
  const { push } = useHistory();
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

  if (!user) {
    push("/sign-in");
  }

  return (
    <>
      {user && (
        <>
          <Header />

          <Wrapper>
            <Text fontSize="18px" fontWeight="bold" mb="4">
              Login {user.email}
            </Text>

            <div>
              <Text fontSize="18px" fontWeight="bold">
                Users:
              </Text>

              {content &&
                content.map((user) => (
                  <Text key={user._id}>
                    {user.firstname}: {user.email}
                  </Text>
                ))}
            </div>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Home;
