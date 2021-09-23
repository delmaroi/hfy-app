/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import PropTypes from "prop-types";
import { Form, useFormikContext } from "formik";
import dayjs from "dayjs";
import { ContentWrapper } from "../style";
import composeValidators from "utils/validators/composeValidators";
import makeRequired from "utils/validators/makeRequired";
import email from "utils/validators/email";
import dateOfBirth from "utils/validators/dateOfBirth";
import Button from "components/Button";
import Input from "components/Inputs/Input";
import DatePicker from "components/Inputs/DatePicker";

export const FormContainer = ({ loading }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (date) => {
    const parsedDate = dayjs(date.target.value).format("YYYY-MM-DD");

    setFieldValue("birthday", parsedDate);
  };

  return (
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

      <DatePicker
        id="datebirth"
        name="datebirth"
        format="YYYY-MM-DD"
        showToday={false}
        validate={dateOfBirth}
        label="Date of birth"
        onChange={handleChange}
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
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </ContentWrapper>
    </Form>
  );
};

FormContainer.propTypes = {
  loading: PropTypes.bool,
};

FormContainer.defaultProps = {
  loading: false,
};
export default FormContainer;
