import classes from "./CheckoutInput.module.css";
const CheckoutInput = (props) => {
  return (
    <div className={classes.inputLine}>
      <label>{props.LabelInput}</label>
      <input
        className={props.inputError}
        value={props.inputValue}
        onChange={props.onChangInputValue}
        onBlur={props.onTouchInputValue}
      />
      {props.inputHasError && (
        <p className={classes.errorMessage}>
          please fill your {props.LabelInput}.
        </p>
      )}
    </div>
  );
};
export default CheckoutInput;
