const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Todos = db.define(
  "todos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id", 
    },
    state:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: "todos_at",
  }
);

module.exports = Todos;
