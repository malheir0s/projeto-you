const express = require('express');
const user = require('./controllers/user')
const finances = require('./controllers/finances')

const routes = express.Router();

//rotas dos usuários
routes.get('/users', user.getAllUsers);
routes.post('/users', user.addUser);

// rotas de financial_transaction
routes.get('/finances', finances.getFinancesByUser) // ex: GET localhost:3000/finances?user_id=1&page=0
routes.post('/finances', finances.addFinance)

module.exports = routes;