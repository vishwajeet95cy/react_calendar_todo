import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const ListItem = (props) => {
  return props.done == true ? (
    <aside className="list_item_done">
      <h3>{props.name}</h3>
    </aside>
  ) : (
    <aside className="list_item_pending">
      <span className="list_item_pending_left">
        <FaRegCheckCircle
          onClick={() => {
            props.handleComplete(props.id);
          }}
        />
      </span>
      <span className="list_item_pending_middle">{props.name}</span>
      <span className="list_item_pending_end">
        <RiDeleteBin5Line
          onClick={() => {
            props.handleDelete(props.id);
          }}
        />
      </span>
    </aside>
  );
};

export default ListItem;
