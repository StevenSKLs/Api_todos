const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const db = require("./utils/database")
const initModels = require("./models/initModels")
const userRoutes = require("./routes/user.routes")
const todosRoutes = require("./routes/todos.routes")
const errorRouter = require('./routes/errorHamdle.routes')
const catergoryRouter = require('./routes/category.routes')

initModels()

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

const PORT = 8000

db.authenticate()
  .then(() => {
    console.log("Connected database")
  })
  .catch((error) => console.log(error))

db.sync({ alter: false }) 
  .then(() => console.log("Database synchronization"))
  .catch((error) => console.log(error))

app.use(userRoutes)
app.use(todosRoutes)
app.use(catergoryRouter)

app.get("/", (req, res) => {
  res.send("Welcome to your task API")
})

// app.use((error, req, res, next) => {
//   res.status(400).json(error);
// });

errorRouter(app)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
