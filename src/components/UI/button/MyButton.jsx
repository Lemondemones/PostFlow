import React from "react";
import classes from "./MyButton.module.css";

function MyButton({ children, ...props }) {
  return (
    // <div>
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
    // </div>
  );
}

export default MyButton;
