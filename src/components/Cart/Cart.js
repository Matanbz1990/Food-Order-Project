import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const onAdd = (item) => {
    CartCtx.addItem({ ...item, amount: 1 });
  };
  const onRemove = (id) => {
    CartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAdd.bind(null, item)}
          onRemove={onRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const AmountOfMoney = +CartCtx.totalAmount.toFixed(2);
  const hasItems = CartCtx.items.length > 0;

  const orderClicked = () => {
    props.onHideCart();
    props.onShowCheckout();
  };

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>${AmountOfMoney}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderClicked}>
            to Checkout
          </button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
