import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ModalForm = ({ show, handleClose, handleAdd }) => {
  const [data, setData] = useState({
    name: "",
    date: new Date(),
    done: false,
  });
  const [err, setErr] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErr({ ...err, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const check = formValidation(data);
    setErr(check);
    if (Object.keys(check).length > 0) return;
    handleAdd(data);
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
      }}
      backdrop="static"
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="nameId">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={data.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Name...."
              isInvalid={!!err.name}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="d-flex flex-column" controlId="dateId">
            <Form.Label>Date</Form.Label>
            <ReactDatePicker
              dateFormat="d MMM yyyy"
              minDate={new Date()}
              selected={data?.date ? new Date(data.date) : numm}
              showTimeSelect={false}
              todayButton="Today"
              customInput={<Form.Control isInvalid={!!err.date} />}
              dropdownMode="select"
              placeholderText="Click to select time"
              shouldCloseOnSelect
              onChange={(date) => {
                handleChange({ target: { name: "date", value: date } });
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please select date.
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;

const formValidation = (data) => {
  const error = {};
  if (!data.name) {
    error["name"] = "Name is Required";
  }

  if (!data.date) {
    error["date"] = "Date is Required";
  }
  return error;
};
