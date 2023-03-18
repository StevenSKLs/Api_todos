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
      type: DataTypes.STRING(50),
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
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pending_status:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: "todos_at",
  }
);

module.exports = Todos;
