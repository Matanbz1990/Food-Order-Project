import classes from "./Checkout.module.css";
import { useState, useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./Modal";
import useInput from "../../hooks/use-input";
import CheckoutCartItem from "./CheckoutCartItem";
// import CheckoutInput from "./CheckoutInput";
const Checkout = (props) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  // const [httpError, setHttpError] = useState();

  const CartCtx = useContext(CartContext);
  const {
    value: fName,
    isValid: fnameIsValid,
    hasError: fnameHasError,
    changeValue: changeFName,
    valueIsTouched: fnameIsTouched,
    reset: resetFName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lName,
    isValid: lnameIsValid,
    hasError: lnameHasError,
    changeValue: changeLName,
    valueIsTouched: lnameIsTouched,
    reset: resetLName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: Email,
    isValid: emailIsValid,
    hasError: emailHasError,
    changeValue: changeEmail,
    valueIsTouched: emailIsTouched,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const fNameError = fnameHasError ? classes.error : "";
  const lNameError = lnameHasError ? classes.error : "";
  const emailError = emailHasError ? classes.error : "";

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CheckoutCartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
        />
      ))}
    </ul>
  );

  const orderFood = (e) => {
    e.preventDefault();
    fetchData({ fName, lName, Email });

    resetEmail();
    resetFName();
    resetLName();
    console.log("order pressed");
    // setTimeout(props.onHideCheckout, 2000);
  };

  const fetchData = async (person) => {
    setIsSubmiting(true);

    const response = await fetch(
      "https://food-order2-ed52b-default-rtdb.firebaseio.com/persons.json",
      {
        method: "POST",
        body: JSON.stringify({ user: person, orderedItems: CartCtx.items }),
        headers: { "Content-Type": "application/json" },
      }
    );
    // if (!response.ok) {
    //   throw new Error("Something went wrong!");
    // }

    const data = await response.json();

    // fetchData(person).catch((error) => {
    //   console.log(error.message);
    //   setHttpError(error.message);
    // return;
    // });

    setIsSubmiting(false);
    setIsOrdered(true);

    console.log(data);

    // return (data) => {
    //   if (data) return;
    // };
    CartCtx.clearCart();
  };

  const totalAmount = CartCtx.totalAmount.toFixed(2);

  let formIsValid = false;
  if (fnameIsValid && lnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  return (
    <Modal onClose={props.onHideCheckout}>
      <form className={classes.container} onSubmit={orderFood}>
        {/* <h1>Checkout!</h1> */}

        {cartItems}

        <div className={classes.total}>
          <span>Total Amount:</span>
          <span>${totalAmount}</span>
        </div>

        <p>Please fill your details, the recipt will be send to your E-mail.</p>
        <div className={classes.container}>
          {/* <CheckoutInput
            LabelInput="First Name"
            inputError={fNameError}
            inputValue={fName}
            onChangeInputValue={changeFName}
            onBlurInputValue={fnameIsTouched}
            inputHasError={fnameHasError}
          />
          <CheckoutInput
            LabelInput="Last Name"
            inputError={lNameError}
            inputValue={lName}
            onChangeInputValue={changeLName}
            onBlurInputValue={lnameIsTouched}
            inputHasError={lnameHasError}
          />
          <CheckoutInput
            LabelInput="Email"
            inputError={emailError}
            inputValue={Email}
            onChangeInputValue={changeEmail}
            onBlurInputValue={emailIsTouched}
            inputHasError={emailHasError}
          /> */}

          <div className={classes.inputLine}>
            <label>First Name:</label>
            <input
              className={fNameError}
              value={fName}
              onChange={changeFName}
              onBlur={fnameIsTouched}
            />
            {fnameHasError && (
              <p className={classes.errorMessage}>
                please fill your first name.
              </p>
            )}
          </div>

          <div className={classes.inputLine}>
            <label>Last Name:</label>
            <input
              className={lNameError}
              value={lName}
              onChange={changeLName}
              onBlur={lnameIsTouched}
            />
            {lnameHasError && (
              <p className={classes.errorMessage}>
                please fill your last name.
              </p>
            )}
          </div>

          <div className={classes.inputLine}>
            <label>Email: </label>
            <div className={classes.EmailError}>
              <input
                className={emailError}
                value={Email}
                onChange={changeEmail}
                onBlur={emailIsTouched}
              />
            </div>
            {emailHasError && (
              <p className={classes.errorMessage}>
                please fill your Email(it must have "@").
              </p>
            )}
          </div>
        </div>
        <div className={classes.buttons}>
          <button type="button" onClick={props.onHideCheckout}>
            Close
          </button>
          <button type="submit" disabled={!formIsValid}>
            Order
          </button>
        </div>
        {isOrdered && <h3>Food ordered successfully!</h3>}
        {!isOrdered && <h3></h3>}
        {/* {httpError} */}
      </form>
    </Modal>
  );
};

export default Checkout;
