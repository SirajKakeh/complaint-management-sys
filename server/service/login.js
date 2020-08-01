const bcrypt = require("bcrypt");

const { execute } = require("../framework/database");

const encryptPassword = password =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, 1, (err, hash) => {
      if (err) return reject(err);
      return resolve(hash);
    });
  });

module.exports.login = async (username, password) => {
  const encryptedPassword = await encryptPassword(password);
  return execute("SELECT * FROM user WHERE username = ? AND password = ?", [username, encryptedPassword]);
};

module.exports.signup = async (username, password) => {
  const encryptedPassword = await encryptPassword(password);
  // TODO: set a better user role flow
  return execute("INSERT INTO user SET username = ?, password = ?, role = 'admin'", [username, encryptedPassword]);
};
