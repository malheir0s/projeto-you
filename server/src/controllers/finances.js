const pool = require('../database/db');

module.exports = {
  addFinance(req, res){  
    pool.query('INSERT INTO financial_transaction SET ?', req.body, function (error, results, fields) {
      if (error) throw error;
      return res.status(201).json({'msg': 'ok'});
    })
  }
}
