const TodosServices = require("../services/todos.services");

const getAllTodo = async (req, res, next) => {
  try {
    const todos = await TodosServices.getAll();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

const createTodo = async (req, res, next) => {
  try {
    const newTodo = req.body;
    const todo = await TodosServices.create(newTodo);
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

const updateTodo = async (req, res, next) => {
  try {
    
    const { id } = req.params;
    const newData = req.body;
    await TodosServices.update(newData, id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTodo,
  createTodo,
  updateTodo,
};
