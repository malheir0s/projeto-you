const pool = require('../database/db');

module.exports = {
  addTodo(req, res) {
    pool.query('INSERT INTO to_do SET ?', req.body, function (error, results, fields) {
      if (error) throw error;
      return res.status(201).json({ 'msg': 'ok' });
    })
  },
  
  getTodosByUser(req, res) {
    let { start_date, end_date, user_id } = req.query;

    let query_string = `SELECT * FROM to_do WHERE id_user = ${user_id}`;
    if (start_date && end_date) {
      query_string += ` AND deadline BETWEEN '${start_date}' AND '${end_date}'`
    }
    else if (end_date) {
      query_string += ` AND deadline < '${end_date}'`
    }

    pool.query(query_string, function (error, results, fields) {
      if (error) throw error;
      return res.json(results);

    }
    )
  },
}