import React from "react";
import classes from "./PopUp.module.css";
import Card from "./Card";
const PopUp = (props) => {
  return (
    <div className={classes.popupBox}>
      <div className={classes.box}>
        <Card>
          <span className={classes.closeIcon} onClick={props.handleClose}>
            x
          </span>
          {props.content}
        </Card>
      </div>
    </div>
  );
};

export default PopUp;
