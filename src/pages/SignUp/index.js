import React from "react";
import Helmet from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import { Wrapper, Page } from "./style";

export const SignUp = () => {
  const { push } = useHistory();
  const { state } = useLocation();

  return (
    <Page>
      <Helmet title="Sign up" />

      <Wrapper>Test</Wrapper>
    </Page>
  );
};

export default SignUp;
