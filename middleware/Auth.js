const { body, validationResult } = require("express-validator");

const validateRegister = [
  body("username")
    .isLength({ min: 5 })
    .withMessage("Username must be at least 5 characters long"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

const validateLogin = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

const validate = (req, res, next) => {
  const { errors } = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateRegister, validateLogin, validate };
