const Todos = require("../models/todos.model");
const Categories = require("../models/category.models");
const Users = require("../models/user.models");

class TodosServices {
  static async getAll() {
    try {
      const result = await Todos.findAll({
        attributes: { exclude: ["author", "categoryId"] },
        include: [
          {
            model: Users,
            attributes: ["username"],
          },
          {
            model: Categories,
            attributes: ["name"],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newTodos) {
    try {
      const result = await Todos.create(newTodos);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(newData, id) {
    try {
      const result = await Todos.update(newData, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodosServices;
