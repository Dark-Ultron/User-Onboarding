const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation");
const { createUserValidation } = require("../validators/user");
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserByGUID);
router.post(
  "/",
  createUserValidation,
  validate(createUserValidation),
  userController.createUser
);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
