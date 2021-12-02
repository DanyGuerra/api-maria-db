const express = require("express");
const authorization = require("../../controllers/authorization");
const router = express.Router();

router.get("/authenticated", (req, res) => {
  res.send("authenticated");
});

module.exports = router;
