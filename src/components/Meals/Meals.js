import { Fragment } from "react";
import SummaryMeals from "./SummaryMeals";
import AvailbleMeals from "./AvailbleMeals";

const Meals = () => {
  return (
    <Fragment>
      <SummaryMeals />
      <AvailbleMeals />
    </Fragment>
  );
};
export default Meals;
