import React from "react";
import { Input as AntInput } from "antd";
import type { InputProps } from "antd/lib/input";
import createInputField from "../createInputField";

const StyledInput = createInputField(AntInput);

export default function Input(props: TProps) {
  return <StyledInput {...props} />;
}

export type TFormikField = {
  disabled?: boolean;
  id: string;
  label?: string;
  name: string;
  required?: boolean;
  validate?: (value: any) => any;
};

type TProps = InputProps & TFormikField;

Input.defaultProps = {
  disabled: false,
  hasError: false,
  label: "",
  validate: null,
};
