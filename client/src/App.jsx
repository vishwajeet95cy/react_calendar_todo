import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { addData, deleteData, getAllData, updateData } from "./api/action";
import Calendar from "./components/Calendar";
import {
  getDatesInRange,
  getWeekEndDate,
  getWeekStartDate,
} from "./utils/helper";
import ModalForm from "./components/ModalForm";

const App = () => {
  const [show, setShow] = useState(false);

  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getAllData().then((val) => {
      setEvent(val);
    });
  }, []);

  const handleNavigation = (direction) => {
    const newWeek = new Date(currentWeek);
    direction === "next"
      ? newWeek.setDate(newWeek.getDate() + 7)
      : newWeek.setDate(newWeek.getDate() - 7);
    setCurrentWeek(newWeek);
  };

  const handleComplete = (id) => {
    updateData(id, { done: true }).then((response) => {
      setEvent(response);
    });
  };

  const handleAdd = (data) => {
    addData({
      ...data,
      date: new Date(data.date).toISOString(),
      id: Date.now(),
    }).then((response) => {
      setEvent(response);
      setShow(false);
    });
  };

  const handleDelete = (id) => {
    deleteData(id).then((response) => {
      setEvent(response);
    });
  };

  const handleModalOpen = () => {
    setShow(true);
  };
  const handleModalClose = () => {
    setShow(false);
  };

  return (
    <main className="main_container">
      <Header />
      <Calendar
        dateData={getDatesInRange(
          getWeekStartDate(currentWeek),
          getWeekEndDate(currentWeek)
        )}
        value={event}
        handleNavigation={handleNavigation}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        handleOpen={handleModalOpen}
      />
      <ModalForm
        show={show}
        handleClose={handleModalClose}
        handleAdd={handleAdd}
      />
    </main>
  );
};

export default App;
