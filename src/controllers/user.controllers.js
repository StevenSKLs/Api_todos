const UsersServices = require("../services/user.services")

const getUser = async (req, res, next) =>{
  try {
    const get_User = await UsersServices.findAll({
      attributes: ["id", "username", "email", "password"],
    })
    res.json(get_User)
  } catch (error) {
    next(error)
  }
}

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body
    const result = await UsersServices.create(newUser)
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update_User_Data = req.body;
    await UsersServices.update(id, update_User_Data);
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) =>{
  try {
    const { id } = req.params
    await UsersServices.destroy({
      where: { id }, 
    })
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}


module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
