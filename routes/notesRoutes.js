const express = require("express");
const router = express.Router();

const notesController = require("../controllers/notesController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, notesController.createNote);
router.get("/", authMiddleware, notesController.getNotes);
router.delete("/:id", authMiddleware, notesController.deleteNote);
router.put("/:id", authMiddleware, notesController.updateNote);

module.exports = router;
