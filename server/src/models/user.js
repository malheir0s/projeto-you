const pool = require('../database/db');

module.exports = {
  async getAllUsers(){
    console.log("Querying...")
    let users
    await pool.query('SELECT id, first_name, last_name, email FROM user', function (error, results, fields){
      if (error) throw error;
      console.log("results ,", JSON.stringify(results));
      users = JSON.stringify(results);
      //return results;
     // return JSON.stringify(results);
    })
    console.log("chega aqui, ", users)
    return users;
  }
}