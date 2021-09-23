import { useFormikContext } from "formik";

export default function useFieldHasError(fieldName) {
  const { touched, errors, submitCount } = useFormikContext();

  const errorMessage = errors[fieldName];
  const fieldTouched = Boolean(touched[fieldName]);
  const formSubmitted = Boolean(submitCount);
  const fieldValidationFailed = Boolean(errorMessage);
  const hasError = (fieldTouched || formSubmitted) && fieldValidationFailed;

  return [hasError, errorMessage];
}
