// @ts-check
const express = require("express");
const { BAD_REQUEST, UNAUTHORIZED } = require("http-status-codes");

const service = require("../service/login");
const { generateToken } = require("../framework/jwt");

const router = express.Router();

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    return res.status(BAD_REQUEST).json({ errorCode: BAD_REQUEST, message: "both fields are required" });
  }
  const results = await service.login(username, password);

  if (results.length) {
    const token = await generateToken({ username, password, role: results[0].role });
    return res.json({ token });
  }
  return res.status(UNAUTHORIZED).json({ errorCode: UNAUTHORIZED, message: "bad username or password" });
});

module.exports = router;
