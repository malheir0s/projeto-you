const express = require('express');
const user = require('./controllers/user')
const finances = require('./controllers/finances')

const routes = express.Router();

//rotas dos usuários
routes.get('/users', user.getAllUsers);
routes.post('/users', user.addUser);

// rotas de financial_transaction
routes.get('/finances', finances.getFinancesByUser)
routes.post('/finances', finances.addFinance)

module.exports = routes;