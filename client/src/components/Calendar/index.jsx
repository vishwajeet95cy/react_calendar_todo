import React from "react";
import "./index.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CalendarItem from "./CalendarItem";
import { filterData } from "../../utils/helper";

const Calendar = ({
  dateData,
  value,
  handleNavigation,
  handleComplete,
  handleDelete,
  handleOpen,
}) => {
  return (
    <section className="calendar_container">
      <article className="calendar_container_header">
        <aside
          className="calendar_container_header_item calendar_container_header_left"
          onClick={() => {
            handleNavigation("prev");
          }}
        >
          <FaArrowLeft />
        </aside>
        <aside
          className="calendar_container_header_item calendar_container_header_right"
          onClick={() => {
            handleNavigation("next");
          }}
        >
          <FaArrowRight />
        </aside>
      </article>
      <article className="calendar_container_content">
        {dateData.map((item) => (
          <CalendarItem
            key={new Date(item).toDateString()}
            date={item}
            data={filterData(value, item)}
            handleOpen={handleOpen}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </article>
    </section>
  );
};

export default React.memo(Calendar);
