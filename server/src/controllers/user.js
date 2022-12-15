const pool = require('../database/db');

module.exports = {
  getAllUsers(req, res) {
    pool.query('SELECT id, first_name, last_name, email FROM user', function (error, results, fields) {
      if (error) throw error;
      return res.json(results);
    })
  },

  addUser(req, res){  
    pool.query('INSERT INTO user SET ?', req.body, function (error, results, fields) {
      if (error) throw error;
      return res.status(201).json({'msg': 'ok'});
    })
  }
}
