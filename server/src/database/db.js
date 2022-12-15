const mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'host.docker.internal',
  user: 'user',
  password: 'password',
  database: 'mydb'
});

module.exports = pool; 