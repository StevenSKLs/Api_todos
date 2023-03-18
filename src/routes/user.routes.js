const { Router } = require("express");
const { createUserValidator, updateUserValidator } = require("../validators/user.validators");
const { getUser, createUser, updateUser, deleteUser } = require("../controllers/user.controllers");

const router = Router();

router.get("/api/v1/users",  getUser)
router.post("/api/v1/users", createUserValidator, createUser) 
router.put("/api/v1/users/:id", updateUserValidator, updateUser)
router.delete("/api/v1/users/:id", deleteUser)

module.exports = router;
