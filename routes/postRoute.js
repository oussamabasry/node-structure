const express = require("express");

let router = express.Router();

router.get("/getone", (req, res) => {
  res.send({ message: "Hi get one" });
});

router.get("/getmany", (req, res) => {
  res.send({ message: "Hi get many" });
});

module.exports = router;
