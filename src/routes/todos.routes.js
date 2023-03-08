const { Router } = require("express");
const {
  getAllTodo,
  createTodo,
  updateTodo,
} = require("../controllers/todos.controllers");

const router = Router();

router.get("/api/v1/todos", getAllTodo);
router.post("/api/v1/todos", createTodo);
router.put("/api/v1/todos/:id", updateTodo);

module.exports = router;
