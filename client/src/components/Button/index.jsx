import React from "react";
import "./index.css";

const Button = ({ handleClick }) => {
  return (
    <button className="button_main" type="button" onClick={handleClick}>
      Add Item
    </button>
  );
};

export default Button;
