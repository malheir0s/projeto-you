const express = require('express');
const user = require('./controllers/user')

const routes = express.Router();

//rotas dos usuários
routes.get('/users', user.getAllUsers);
routes.post('/users', user.addUser);

module.exports = routes;