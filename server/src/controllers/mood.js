const pool = require('../database/db');

module.exports = {
    getMoods(req, res) {
        const limitNumber = req.query.limit ? +req.query.limit : 1000;
        const limit = req.query.limit ? `LIMIT ${req.query.limit}`: 'LIMIT 1000';
        const offset = req.query.page ? (+req.query.page) * limitNumber  : 0;
        
        pool.query(
            `SELECT date, mood_level 
            FROM mood
            WHERE id_user = ${req.params.idUser}
            ORDER BY date
            ${limit}
            OFFSET ${offset}`,
            function (error, results, fields) {
                if (error) throw error;
                return res.json(results);
            }
        )    
    },

    async getMoodByLevel(req, res) {
        
        pool.query(
            `SELECT date, mood_level 
            FROM mood
            WHERE id_user = ${req.params.idUser} AND mood_level = ${req.params.moodLevel}
            INNER JOIN workout ON workout.id_user = mood.id_user AND mood.date = workout.date`,
            function (error, results, fields) {
                if (error) throw error;
                return res.json(results);
            }
        ) 
    }
}