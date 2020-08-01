// @ts-check
const express = require("express");
const { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR, CREATED } = require("http-status-codes");

const service = require("../service/complaint");

const router = express.Router();

router.post("/complaint", async (req, res) => {
  try {
    const results = await service.addComplaint(req.body);

    if (results.affectedRows > 0) {
      return res.status(CREATED).json({ status: "success" });
    }
    return res.status(BAD_REQUEST).json({ errorCode: BAD_REQUEST, message: "bad data" });
  } catch (error) {
    console.error(error);
    return res
      .status(INTERNAL_SERVER_ERROR)
      .json({ errorCode: INTERNAL_SERVER_ERROR, message: JSON.stringify(error, null, 2) });
  }
});

router.get("/complaints", async (req, res) => {
  try {
    const results = await service.getComplaints();

    return res.status(OK).json({ status: "success", data: results });
  } catch (error) {
    console.error(error);
    return res
      .status(INTERNAL_SERVER_ERROR)
      .json({ errorCode: INTERNAL_SERVER_ERROR, message: JSON.stringify(error, null, 2) });
  }
});

module.exports = router;
