// @ts-check
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// TODO: make this dynamic
const loginController = require("./controllers/login");
const signupController = require("./controllers/signup");
const complaintController = require("./controllers/complaint");

const app = express();

app.use(cors({ exposedHeaders: ["Authorization"] }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO: make this dynamic
app.use(loginController);
app.use(signupController);
app.use(complaintController);

app.listen(3001, () => console.log("listening on 3001"));
