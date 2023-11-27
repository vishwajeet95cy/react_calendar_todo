import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const DateItem = ({ day, date, selected, disabled }) => {
  return (
    <aside
      className={`date_item_container ${
        selected ? "date_item_container_select" : ""
      } ${disabled ? "date_item_container_disabled" : ""}`}
    >
      <aside className="date_item_container_day">
        <p>{day}</p>
      </aside>
      <aside className="date_item_container_date">
        <h4>{date}</h4>
      </aside>
    </aside>
  );
};

export default DateItem;

DateItem.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};
