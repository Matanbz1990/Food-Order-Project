import classes from "./AvailbleMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

const AvailbleMeals = () => {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [mealsMenuIsOpen, setMealsMenuIsOpen] = useState(false);
  const [dessertsMenuIsOpen, setDessertsMenuIsOpen] = useState(false);
  const [drinksMenuIsOpen, setDrinksMenuIsOpen] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order2-ed52b-default-rtdb.firebaseio.com/food.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const mealsData = [];
      const dessertsData = [];
      const drinksData = [];
      // console.log(responseData.meals);
      for (const key in responseData.meals) {
        mealsData.push({
          id: key,
          name: responseData.meals[key].name,
          description: responseData.meals[key].description,
          price: responseData.meals[key].price,
        });
      }

      setMeals(mealsData);

      for (const d in responseData.Desserts) {
        dessertsData.push({
          id: d,
          name: responseData.Desserts[d].name,
          description: responseData.Desserts[d].description,
          price: responseData.Desserts[d].price,
        });
      }

      setDesserts(dessertsData);

      for (const s in responseData.drinks) {
        drinksData.push({
          id: s,
          name: responseData.drinks[s].name,
          description: responseData.drinks[s].description,
          price: responseData.drinks[s].price,
        });
      }

      setDrinks(drinksData);

      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const foodItems = [meals, desserts, drinks];
  let items = [];

  for (let i = 0; i < foodItems.length; i++) {
    items[i] = foodItems[i].map((item) => (
      <MealItem
        id={item.id}
        key={item.id}
        description={item.description}
        name={item.name}
        price={item.price}
      />
    ));
  }

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

  const mealsMenuHandeling = () => {
    setMealsMenuIsOpen(!mealsMenuIsOpen);
    setDessertsMenuIsOpen(false);
    setDrinksMenuIsOpen(false);
  };
  const dessertMenuHandeling = () => {
    setDessertsMenuIsOpen(!dessertsMenuIsOpen);
    setMealsMenuIsOpen(false);
    setDrinksMenuIsOpen(false);
  };
  const drinksMenuHandeling = () => {
    setDrinksMenuIsOpen(!drinksMenuIsOpen);
    setMealsMenuIsOpen(false);
    setDessertsMenuIsOpen(false);
  };
  const menuHandeling = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <section className={classes.meals}>
      <Card>
        {!menuIsOpen && (
          <div className={classes.verticalCenter}>
            <button
              onClick={mealsMenuHandeling}
              className={`${mealsMenuIsOpen ? "classes.darkClass" : "hidden"}`}
            >
              Food Menu
            </button>
            <button
              onClick={dessertMenuHandeling}
              className={`${
                dessertsMenuIsOpen ? "classes.darkClass" : "hidden"
              }`}
            >
              Desserts Menu
            </button>
            <button
              onClick={drinksMenuHandeling}
              className={`${drinksMenuIsOpen ? "classes.darkClass" : "hidden"}`}
            >
              Drinks Menu
            </button>
          </div>
        )}
        {mealsMenuIsOpen && <ul>{items[0]}</ul>}
        {dessertsMenuIsOpen && <ul>{items[1]}</ul>}
        {drinksMenuIsOpen && <ul>{items[2]}</ul>}

        {menuIsOpen && (
          <div className={classes.verticalCenter}>
            <button onClick={menuHandeling}>close</button>
          </div>
        )}
      </Card>
    </section>
  );
};
export default AvailbleMeals;
