import classes from "./AvailbleMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

const AvailbleMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order2-ed52b-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const foodData = [];

      for (const key in responseData) {
        foodData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(foodData);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const mealItems = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      description={meal.description}
      name={meal.name}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section>
        <p className={classes.loading}>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p className={classes.error}>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealItems}</ul>
      </Card>
    </section>
  );
};
export default AvailbleMeals;
