const Users = require("./user.models");
const Todos = require("./todos.model");
const Categories = require("./category.models");

const initModels = () => {

  Users.hasMany(Todos, { foreignKey: "author" });
  Todos.belongsTo(Users, { foreignKey: "author" });

  Categories.hasMany(Todos, { foreignKey: "category_id" });
  Todos.belongsTo(Categories, { foreignKey: "category_id" });

};

module.exports = initModels;
