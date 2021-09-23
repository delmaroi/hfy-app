import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "services/auth.service";
import { Container, Nav, StyledLink } from "./styles";

export const Header = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.signout();
  };

  return (
    <Container>
      <Nav>
        {currentUser ? (
          <div>
            <StyledLink to={"/sign-out"} onClick={logOut}>
              Sign Out
            </StyledLink>
          </div>
        ) : (
          <div>
            <StyledLink to={"/sign-in"}>Sign In</StyledLink>

            <StyledLink to={"/sign-up"}>Sign Up</StyledLink>
          </div>
        )}
      </Nav>
    </Container>
  );
};

export default Header;
