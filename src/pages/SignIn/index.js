import React from "react";
import Helmet from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import { Wrapper, Page } from "./style";

export const SignIn = () => {
  const { push } = useHistory();
  const { state } = useLocation();

  const handleSubmit = async (response) => {
    push(state?.from || "/home");
  };

  return (
    <Page>
      <Helmet title="Sign in" />

      <Wrapper>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting, values }) => (
            <Form>
              <FormItem>
                <Field
                  autoComplete="email"
                  id="loginEmail"
                  name="email"
                  type="email"
                  label="Email address"
                  validate={composeValidators(emailValidator)}
                  component={Input}
                />
              </FormItem>

              <Button
                block
                data-test-id="continue-button"
                disabled={!values.email}
                loading={isSubmitting}
                type="submit"
              >
                Continue
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Page>
  );
};

export default SignIn;
