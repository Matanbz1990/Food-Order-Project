import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import Caffe from "../../assets/capucino.jpg";
import GreenTea from "../../assets/GreenTea.jpg";
import IndianChai from "../../assets/IndianChai.jpg";
import IceCream from "../../assets/IceCream.jpg";
import ChocolateBall from "../../assets/ChocolateBall.jpg";
import FruitSalad from "../../assets/FruitSalad.jpg";
import Burger from "../../assets/Burger.jpg";
import VegBurger from "../../assets/VegBurger.jpg";
import S from "../../assets/S.jpg";
import GreenBowl from "../../assets/GreenBowl.jpg";

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
      <div className={classes.mealsOrder}>
        <div className={classes.VegBurger}>
          <li>
            <h3 className={classes.name}>{props.name}</h3>
            <p className={classes.description}>{props.description}</p>
            <p className={classes.price}>${props.price}</p>
          </li>
          {props.name === "Veg Burger" && <h2>New!</h2>}
          {props.name === "Fruit-Salad" && <h2>New!</h2>}
        </div>

        {props.name === "Cappucino" && (
          <img src={Caffe} alt="img " className={classes.bump} />
        )}
        {props.name === "Green Tea" && (
          <img src={GreenTea} alt="img " className={classes.bump} />
        )}
        {props.name === "Indian Chai" && (
          <img src={IndianChai} alt="img " className={classes.bump} />
        )}
        {props.name === "Ice-Cream" && (
          <img src={IceCream} alt="img " className={classes.bump} />
        )}
        {props.name === "Chocolate-ball" && (
          <img src={ChocolateBall} alt="img " className={classes.bump} />
        )}
        {props.name === "Fruit-Salad" && (
          <img src={FruitSalad} alt="img " className={classes.bump} />
        )}
        {props.name === "Burger" && (
          <img src={Burger} alt="img " className={classes.bump} />
        )}
        {props.name === "Veg Burger" && (
          <div className={classes.VegBurger}>
            {/* <h2>New!</h2> */}
            <img src={VegBurger} alt="img " className={classes.bump} />
          </div>
        )}
        {props.name === "Sushi" && (
          <img src={S} alt="img " className={classes.bump} />
        )}
        {props.name === "Green Bowel" && (
          <img src={GreenBowl} alt="img " className={classes.bump} />
        )}
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddHandler} />
      </div>
    </div>
  );
};
export default MealItem;
