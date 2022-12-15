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

  getCompletedOnTimeWithGoodMood(req, res) {
    let {user_id} = req.query;
  

    pool.query(`SELECT * FROM to_do as t
    JOIN mood as m ON m.id_user = t.id_user
    WHERE t.id_user = ${user_id}
    AND t.deadline >= t.completed_at
    AND (m.mood_level='AMAZING' OR m.mood_level='FINE' OR  m.mood_level='OK')
    `, function (error, results, fields) {
      if (error) throw error;
      return res.json(results);

    }
    )
  },

}