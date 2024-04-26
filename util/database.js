const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node",
  password: "DEEPAK@96",
});

module.exports = pool.promise();
