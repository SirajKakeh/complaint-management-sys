// @ts-check
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const loginController = require("./controllers/login");

const app = express();

app.use(cors({ exposedHeaders: ["Authorization"] }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(loginController);

app.listen(3001, () => console.log("listening on 3001"));
