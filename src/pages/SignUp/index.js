/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import { Formik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import Form from "./Form";
import { ErrorMessage } from "./style";

import Card from "components/Card";
import Footer from "components/Footer";
import AuthService from "services/auth.service";

export const SignUp = () => {
  const { push } = useHistory();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
    datebirth: "",
  };

  const handleSubmit = (values) => {
    setLoading(true);

    AuthService.signup({ ...values }).then(
      () => {
        setLoading(false);

        push(state?.from || "/home");
      },
      (error) => {
        const resMessage =
          error.response?.data?.message || error.message || error.toString();

        setErrorMessage(resMessage);
        setLoading(false);
      }
    );
  };

  return (
    <Card title="Register new user">
      {loading && <div>Loading...</div>}

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => <Form loading={loading} />}
      </Formik>

      <Footer text="Login" route="sign-in" />
    </Card>
  );
};

export default SignUp;
