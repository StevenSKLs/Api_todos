const UsersServices = require("../services/user.services")

const getUser = async (req, res) =>{
  try {
    const get_User = await UsersServices.findAll({
      attributes: ["id", "username", "email", "password"],
    })
    res.json(get_User)
  } catch (error) {
    res.status(400).json(error)
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = req.body
    const result = await UsersServices.create(newUser)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const update_User_Data = req.body;
    await UsersServices.update(id, update_User_Data);
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error)
  }
}

const deleteUser = async (req, res) =>{
  try {
    const { id } = req.params
    await UsersServices.destroy({
      where: { id }, 
    })
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error)
  }
}


module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
