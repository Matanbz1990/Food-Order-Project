import classes from "./CheckoutCartitem.module.css";

const CheckoutCartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
    </li>
  );
};
export default CheckoutCartItem;
