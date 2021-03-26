const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  register,
  login,
  getUser,
  updateUser,
  deleteUser,
  checkToken,
} = require("../controllers/userController");

router.post("/register", register);

router.post("/login", login);

router.patch("/:id", updateUser);

router.get("/", auth, getUser);

router.delete("/delete", auth, deleteUser);

router.get("/tokenIsValid", checkToken);

module.exports = router;
