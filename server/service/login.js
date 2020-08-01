const { execute } = require("../framework/database");

module.exports.login = (username, password) => {
  return execute("SELECT * FROM user WHERE username = ? AND password = ?", [username, password]);
};
