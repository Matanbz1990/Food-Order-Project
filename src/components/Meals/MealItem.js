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
      <div>
        <li>
          <h3 className={classes.name}>{props.name}</h3>
          <p className={classes.description}>{props.description}</p>
          <p className={classes.price}>${props.price}</p>
        </li>
      </div>
      {props.name === "Cappucino" && <img src={Caffe} alt="img " />}
      {props.name === "Green Tea" && <img src={GreenTea} alt="img " />}
      {props.name === "Indian Chai" && <img src={IndianChai} alt="img " />}
      {props.name === "Ice-Cream" && <img src={IceCream} alt="img " />}
      {props.name === "Chocolate-ball" && (
        <img src={ChocolateBall} alt="img " />
      )}
      {props.name === "Fruit-Salad" && <img src={FruitSalad} alt="img " />}
      {props.name === "Burger" && <img src={Burger} alt="img " />}
      {props.name === "Veg Burger" && <img src={VegBurger} alt="img " />}
      {props.name === "Sushi" && <img src={S} alt="img " />}
      {props.name === "Green Bowel" && <img src={GreenBowl} alt="img " />}
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddHandler} />
      </div>
    </div>
  );
};
export default MealItem;
