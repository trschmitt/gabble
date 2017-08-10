const express = require("express");
const router = express.Router();
const models = require("../models")

router.get("/", (req, res) => {
  res.render("index", { secondsToRender: Date.now() - req._startTime });
});

module.exports = router;
