const jwt = require("jsonwebtoken");

const secret = "my_secret_secret";

module.exports = function (req, res, next) {};

module.exports.generateToken = payload =>
  new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      secret,
      {
        algorithm: "HS256",
        expiresIn: 60 * 60 * 24,
      },
      (err, token) => {
        if (err) return reject(err);
        return resolve(token);
      }
    );
  });
