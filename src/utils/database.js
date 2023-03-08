const { Sequelize } = require("sequelize")

const db = new Sequelize({
  database: "project_node",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "node",
  dialect: "postgres",
});

module.exports = db;

//aaaa-MM-dd HH:mm:ss
//INSERT INTO categories (name)VALUES ('Cocina'), ('Ciencia'), ('Tecnologia'), ('Deportes'), ('Arte'), ('Entretenimiento'), ('Politica'), ('Religión'), ('Cine'), ('Juegos'), ('Otra');
//INSERT INTO posts (title, description, author, category_id, posted_at) VALUES ('Dudas con Sequelize', 'ALguien podría darme una mano con como poner un valor por defecto en unmodelo', 1, 3, '2023-03-01 20:42:31');
//INSERT INTO users (username, email, password, "createdAt", "updatedAt")VALUES ('iannacus', 'ian@academlo.com', '1234', '2023-03-01 19:55:30', '2023-03-01 19:55:30');
