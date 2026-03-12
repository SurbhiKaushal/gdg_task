const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { refreshToken } = require("../controllers/refreshTokens");

router.post("/token", refreshToken);
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
