/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import PropTypes from "prop-types";
import type { ButtonProps } from "antd/lib/button";
import { StyledButton } from "./styles";

export default function Button({ children, ...restProps }: PropTypes) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}

type ButtonType = ButtonProps["type"];

type PropTypes = {
  children: React.ReactNode;
  type?: ButtonType;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
