import React from "react";
import moment from "moment";
import { WEEK_DAYS, compareDate, filterData } from "../../utils/helper";
import DateItem from "../DateItem";
import Button from "../Button";
import ListItem from "./ListItem";

const CalendarItem = ({
  date,
  data,
  handleComplete,
  handleDelete,
  handleOpen,
}) => {
  return (
    <article className="calendar_item_container">
      <DateItem
        day={WEEK_DAYS[new Date(date).getDay()]}
        date={new Date(date).getDate()}
        selected={
          moment().format("DD-MM-YYYY") ===
          moment(new Date(date)).format("DD-MM-YYYY")
        }
        disabled={compareDate(date)}
      />
      <article className="calendar_item_container_item">
        {data.map((item) => (
          <ListItem
            key={item.id}
            {...item}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        ))}
        {!compareDate(date) && (
          <aside>
            <Button
              handleClick={() => {
                handleOpen();
              }}
            />
          </aside>
        )}
      </article>
    </article>
  );
};

export default CalendarItem;
