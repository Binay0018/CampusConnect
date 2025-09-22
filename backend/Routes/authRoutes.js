// Routes/authRoutes.js
const express = require("express");
const router = express.Router();

// Use require with correct path
const { register, login } = require("../Controller/AuthController"); // match folder name exactly

// Routes
router.post("/register", register);
router.post("/login", login);

module.exports = router;
