import React from "react";
import PropTypes from "prop-types";
import { useField, FieldConfig } from "formik";
import useFieldHasError from "../useFieldHasError";
import { FieldWrap, ErrorText, Label } from "./style";

interface FormikFieldConfig extends FieldConfig {
  [x: string]: any;
}

export default function createField(Input: any) {
  const Field = (props: FormikFieldConfig) => {
    const { id, label, errorNotDisplayed, ...restProps } = props;
    const [inputProps] = useField(props);

    const [hasError, errorMessage] = useFieldHasError(restProps.name);
    const errorTextCanBeDisplayed = hasError && !errorNotDisplayed;

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
