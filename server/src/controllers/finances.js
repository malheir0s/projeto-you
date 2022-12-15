const pool = require('../database/db');

module.exports = {
  addFinance(req, res){  
    pool.query('INSERT INTO financial_transaction SET ?', req.body, function (error, results, fields) {
      if (error) throw error;
      return res.status(201).json({'msg': 'ok'});
    })
  },

  getFinancesByUser(req, res){
    pool.query('SELECT * FROM financial_transaction WHERE id_user = ? LIMIT 15 OFFSET ?', [req.query.user_id, parseInt(req.query.page)], function(error, results, fields){
      if (error) throw error;
      return res.json(results);
    })} 
}
