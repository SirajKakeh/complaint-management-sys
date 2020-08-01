const mysql = require("mysql");

const pool = mysql.createPool({
  host: "mysql-11518-0.cloudclusters.net",
  user: "admin",
  password: "123123",
  database: "cms",
  connectionLimit: 20,
  port: 11520
});

module.exports.execute = (query, values) =>
  new Promise((resolve, reject) => {
    pool.query(query, values, (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
