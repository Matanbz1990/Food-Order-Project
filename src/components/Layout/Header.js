import { Fragment } from "react";
import classes from "./Header.module.css";
import Foodimg from "../../assets/Food.jpg";
import HeaderCartButton from "../Cart/HeaderCartButton";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          <span>
            <FastfoodOutlinedIcon fontSize="large" />{" "}
          </span>
          Matan's Food
        </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Foodimg} alt="img of food" />
      </div>
    </Fragment>
  );
};
export default Header;
