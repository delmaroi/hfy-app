import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import { ErrorMessage, ContentWrapper } from "./style";
import composeValidators from "utils/validators/composeValidators";
import makeRequired from "utils/validators/makeRequired";
import email from "utils/validators/email";
import dateOfBirth from "utils/validators/dateOfBirth";
import Button from "components/Button";
import Input from "components/Inputs/Input";
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
        {({ isSubmitting }) => (
          <Form>
            <Input
              id="firstname"
              name="firstname"
              label="First Name"
              placeholder="Bob"
              validate={makeRequired("Please enter a valid first name")}
            />

            <Input
              id="lastname"
              name="lastname"
              label="Last Name"
              placeholder="Dylan"
              validate={makeRequired("Please enter a valid last name")}
            />

            <Input
              id="datebirth"
              name="datebirth"
              label="Date of birth"
              placeholder="YYYY-MM-DD"
              validate={dateOfBirth}
            />

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

            <Input
              id="confirm-password"
              name="password2"
              label="Comfirm Password"
              type="password"
              validate={makeRequired("Please enter a valid password")}
            />

            <ContentWrapper>
              <Button type="primary" htmlType="submit" loading={isSubmitting}>
                Submit
              </Button>
            </ContentWrapper>
          </Form>
        )}
      </Formik>

      <Footer text="Login" route="sign-in" />
    </Card>
  );
};

export default SignUp;
