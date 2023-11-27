import { Router } from "express";
import {
  addTodoData,
  deleteTodoData,
  getTodoData,
  updateTodoData,
} from "../controller/todo.controller.js";

const router = Router();

router.route("/todo").get(getTodoData).post(addTodoData);
router.route("/todo/:id").put(updateTodoData).delete(deleteTodoData);

export default router;
