/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import { ContentWrapper, ErrorMessage } from "./style";
import composeValidators from "utils/validators/composeValidators";
import makeRequired from "utils/validators/makeRequired";
import email from "utils/validators/email";
import Footer from "components/Footer";
import Button from "components/Button";
import Input from "components/Inputs/Input";
import Card from "components/Card";
import AuthService from "services/auth.service";

export const SignIn = () => {
  const { push } = useHistory();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values, "values");
    setErrorMessage();
    setLoading(true);

    AuthService.signin({ ...values }).then(
      () => {
        setLoading(false);

        push(state?.from || "/home");
      },
      (error) => {
        const resMessage =
          error?.response?.data?.message || error.message || error.toString();

        setErrorMessage(resMessage);
        setLoading(false);
      }
    );
  };
  console.log(loading, "loading");
  return (
    <Card title="Sing In">
      {loading && <div>Loading...</div>}

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {() => (
          <Form>
            <Input
              id="email"
              name="email"
              label="Email"
              placeholder="example@company.com"
              validate={composeValidators(
                email,
                makeRequired("Please enter a valid email address")
              )}
            />
            <Input
              id="password"
              name="password"
              label="Password"
              type="password"
              validate={makeRequired("Please enter a valid password")}
            />

            <ContentWrapper>
              <Button type="primary" htmlType="submit" disabled={loading}>
                Submit
              </Button>
            </ContentWrapper>
          </Form>
        )}
      </Formik>

      <Footer text="Sign Up" route="sign-up" />
    </Card>
  );
};

export default SignIn;
