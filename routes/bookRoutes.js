const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

router.get("/search", bookController.getBySearch);

router.get("/:id", bookController.getById);
router.post("/", bookController.create);
router.put("/:id", bookController.updateById);
router.delete("/:id", bookController.deleteById);
router.get("/", bookController.getAll);

module.exports = router;
