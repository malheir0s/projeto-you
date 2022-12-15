const express = require('express');
const user = require('./controllers/user')

const routes = express.Router();

routes.get('/users', user.getAllUsers);

module.exports = routes;