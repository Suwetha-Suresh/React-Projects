import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/*the spread operator will add all the props.input eg.id={props.input.id} that id etc to the field*/}
    </div>
  );
});

export default Input;
