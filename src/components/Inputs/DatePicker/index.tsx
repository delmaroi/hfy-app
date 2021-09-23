/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { DatePicker as AntDatePicker } from "antd";
import createInputField from "../createInputField";

const StyledInput = createInputField(AntDatePicker);

export default function DatePicker(props: TProps) {
  return <StyledInput {...props} />;
}

type TProps = TFormikField;

DatePicker.defaultProps = {
  disabled: false,
  label: "",
  required: false,
  validate: null,
};

export type TFormikField = {
  disabled?: boolean;
  id: string;
  label?: string;
  name: string;
  required?: boolean;
  validate?: (value: any) => any;
};
