import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../store/CartContext";
const MealItem = (props) => {
  const CartCtx = useContext(CartContext);

  const onAddHandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={classes.meal}>
      <div>
        <li>
          <h3 className={classes.name}>{props.name}</h3>
          <p className={classes.description}>{props.description}</p>
          <p className={classes.price}>${props.price}</p>
        </li>
      </div>

      <div>
        <MealItemForm id={props.id} onAddToCart={onAddHandler} />
      </div>
    </div>
  );
};
export default MealItem;
