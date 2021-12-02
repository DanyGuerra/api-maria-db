const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const usersRouter = require("./users");

router.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// GET /api/health
router.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "OK",
  });
});

// Router /auth
router.use("/auth", authRouter);

// Router /users
router.use("/users", usersRouter);

module.exports = router;
