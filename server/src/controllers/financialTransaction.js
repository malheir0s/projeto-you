const pool = require('../database/db');

module.exports = {
  getTransctions(req, res) {
    pool.query(
        `SELECT id, value, recurrent, start_date, completed_at, essential, is_expense, id_user
        FROM financial_transaction
        WHERE id_user = ${req.params.idUser}
        ORDER BY is_expense, essential`, 
        function (error, results, fields) {
            if (error) throw error;
            return res.json(results);
        }
    )
  },

  countTransactionByExpense(req, res) {
    const recurrent = req.query.isRecurrent == '0' || req.query.isRecurrent == '1' ? ' AND recurrent = ' + req.query.isRecurrent : '';

    pool.query(
        `SELECT COUNT(id) as quantity, SUM(value) as totals, is_expense
        FROM financial_transaction
        WHERE id_user = ${req.params.idUser}${recurrent}
        GROUP BY is_expense`,
        function (error, results, fields) {
            if (error) throw error;
            return res.json(results);
        }
    )
  },

  countTransactionByEssential(req, res) {
    const recurrent = req.query.isRecurrent == '0' || req.query.isRecurrent == '1' ? ' AND recurrent = ' + req.query.isRecurrent : '';

    pool.query(
        `SELECT COUNT(id) as quantity, SUM(value) as totals, essential
        FROM financial_transaction
        WHERE id_user = ${req.params.idUser}${recurrent}
        GROUP BY essential`,
        function (error, results, fields) {
            if (error) throw error;
            return res.json(results);
        }
    )
  },
}