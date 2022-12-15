const pool = require('../database/db');

module.exports = {
  getAllUsers(req, res) {
    pool.query('SELECT id, first_name, last_name, email FROM user', function (error, results, fields) {
      if (error) throw error;
      return res.json(results);
    })
  }
}