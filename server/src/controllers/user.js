const user = require ('../models/user');

module.exports = {
  async getAllUsers(request, response){
    console.log("received")
    const all_users = await user.getAllUsers();
    console.log("all users ,", all_users)
    return response.json(all_users);
  }
}