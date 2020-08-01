// @ts-check
const express = require("express");
const { BAD_REQUEST, UNAUTHORIZED, CREATED } = require("http-status-codes");

const service = require("../service/login");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    return res.status(BAD_REQUEST).json({ errorCode: BAD_REQUEST, message: "both fields are required" });
  }
  const results = await service.signup(username, password);

  if (results.affectedRows > 0) {
    return res.status(CREATED).json({ status: "success" });
  }
  return res.status(UNAUTHORIZED).json({ errorCode: UNAUTHORIZED, message: "bad username or password" });
});

module.exports = router;
