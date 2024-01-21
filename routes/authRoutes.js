const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const {
  validateRegister,
  validateLogin,
  validate,
} = require("../middleware/Auth");
const {
  createUser,
  findUserByUsername,
} = require("../controllers/authController");

router.post("/register", validateRegister, async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const newId = uuidv4();
    const userId = await createUser(newId, username, password, email);
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, message: "ok" });
  } catch (error) {
    if (error.code === "23505") {
      res.json({
        message: "emailerror",
      });
    } else {
      res.json({ message: "Registration failed" });
    }
    console.error(error);
  }
});

router.post("/login", validateLogin, async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);
    const user = await findUserByUsername(username);
    console.log(!user);
    if (!user) {
      return res.json({ message: "error" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.json({ message: "error" });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, message: "ok", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
