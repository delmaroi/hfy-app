import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, border, layout, typography, space } from "styled-system";
import createField from "../../utils/createField";

export default function createInputField(InputComponent) {
  const StyledComponent = styleInput(InputComponent);

  function BaseInput({ type, validate, ...restProps }) {
    return <StyledComponent type={type} $validate={validate} {...restProps} />;
  }

  BaseInput.propTypes = {
    type: PropTypes.string,
    validate: PropTypes.func,
  };

  BaseInput.defaultProps = {
    type: "",
    validate: undefined,
  };

  return createField(BaseInput);
}

export function styleInput(InputComponent) {
  return styled(InputComponent)`
    background-color: white;
    border: 1px solid #ccc;
    margin: 10px 0 5px;
    margin-top: 10px;
    padding-left: 10px;
    border-radius: 4px;
    font-size: 14px;
    height: 24px;
    display: flex;
    width: 100%;

    ${color}
    ${border}
    ${layout}
    ${typography}
    ${space}

    &::placeholder {
      color: #797680;
    }
  `;
}
