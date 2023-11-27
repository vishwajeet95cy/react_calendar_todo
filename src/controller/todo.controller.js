import fs from "fs";
import CustomError from "../util/CustomError.js";

export const getTodoData = async (req, res, next) => {
  try {
    const data = JSON.parse(fs.readFileSync("src/data/db.json"));
    return res.json(data);
  } catch (err) {
    next(err);
  }
};

export const addTodoData = async (req, res, next) => {
  if (Object.keys(req.body).length == 0) {
    return next(new CustomError("All Fields is Required", 400));
  }
  const { name, date } = req.body;
  if (!name || !date) {
    return next(new CustomError("All Fields is Required", 400));
  }
  try {
    const data = JSON.parse(fs.readFileSync("src/data/db.json"));
    data.push({
      name,
      date: new Date(date).toISOString(),
      done: false,
      id: Date.now(),
    });
    await fs.writeFileSync("src/data/db.json", JSON.stringify(data));
    return res.json(data);
  } catch (err) {
    next(err);
  }
};

export const deleteTodoData = async (req, res, next) => {
  if (!req.params.id) {
    return next(new CustomError("Id is Required", 400));
  }
  try {
    const data = JSON.parse(fs.readFileSync("src/data/db.json"));
    data.splice(
      data.findIndex((item) => item.id === parseInt(req.params.id)),
      1
    );
    await fs.writeFileSync("src/data/db.json", JSON.stringify(data));
    return res.json(data);
  } catch (err) {
    next(err);
  }
};

export const updateTodoData = async (req, res, next) => {
  if (!req.params.id) {
    return next(new CustomError("Id is Required", 400));
  }
  try {
    const data = JSON.parse(fs.readFileSync("src/data/db.json"));
    const key = data.findIndex((item) => item.id === parseInt(req.params.id));
    data[key] = { ...data[key], ...req.body, done: true };
    await fs.writeFileSync("src/data/db.json", JSON.stringify(data));
    return res.json(data);
  } catch (err) {
    next(err);
  }
};
