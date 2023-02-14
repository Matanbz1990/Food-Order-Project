import classes from "./SummaryMeals.module.css";
import Card from "../UI/Card";
const SummaryMeals = () => {
  return (
    <section className={classes.summary}>
      <Card>
        <h2>Delicious Food,Deliverd To You!</h2>

        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
        <p> call me if you need a web developer! 0524-615296</p>
        <h3>Free shipping over $20</h3>
      </Card>
    </section>
  );
};

export default SummaryMeals;
