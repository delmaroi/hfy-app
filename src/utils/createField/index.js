/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import useFieldHasError from "../useFieldHasError";
import { FieldWrap, ErrorText, Label } from "./style";

export default function createField(Input) {
  const Field = (props) => {
    const { id, label, errorNotDisplayed, ...restProps } = props;
    const [inputProps] = useField(props);

    const [hasError, errorMessage] = useFieldHasError(restProps.name);
    const errorTextCanBeDisplayed = hasError && !errorNotDisplayed;

    function getEventHandler(handler) {
      return (event) => {
        let parsedEvent = event;

        if (!isEvent(event)) {
          parsedEvent = createSimpleEvent(restProps.name, event);
        }

        if (inputProps[handler]) {
          inputProps[handler](parsedEvent);
        }

        if (props[handler]) {
          props[handler](parsedEvent);
        }
      };
    }

    return (
      <>
        <FieldWrap>
          {label && <Label htmlFor={id}>{label}</Label>}

          <Input
            key="input"
            id={id}
            hasError={hasError}
            {...restProps}
            {...inputProps}
            onChange={getEventHandler("onChange")}
            onBlur={getEventHandler("onBlur")}
            onFocus={getEventHandler("onFocus")}
          />
        </FieldWrap>

        {errorTextCanBeDisplayed && (
          <>
            <ErrorText>{errorMessage}</ErrorText>
          </>
        )}
      </>
    );
  };

  Field.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    errorNotDisplayed: PropTypes.bool,
  };

  Field.defaultProps = {
    label: undefined,
    onChange: undefined,
    onBlur: undefined,
    onFocus: undefined,
    errorNotDisplayed: false,
  };

  return Field;
}

function isEvent(event) {
  return Boolean(event && event.target);
}

function createSimpleEvent(name, value) {
  return {
    target: {
      name,
      value,
    },
  };
}
