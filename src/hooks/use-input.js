import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validate(enteredValue);
  const hasError = isTouched && !isValid;

  const changeValue = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueIsTouched = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  };
  return {
    value: enteredValue,
    changeValue,
    valueIsTouched,
    hasError,
    isValid,
    reset,
  };
};

export default useInput;
