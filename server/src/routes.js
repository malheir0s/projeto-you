const express = require('express');
const user = require('./controllers/user');
const financialTransaction = require('./controllers/financialTransaction');

const routes = express.Router();

//rotas dos usuários
routes.get('/users', user.getAllUsers);
routes.post('/users', user.addUser);

// rotas de financial_transaction
routes.get('/finances', finances.getFinancesByUser) // ex: GET localhost:3000/finances?user_id=1&page=0
routes.post('/finances', finances.addFinance)

routes.get('/financial_transaction/:idUser', financialTransaction.getTransctions);
routes.get('/financial_transaction/count/is_expanse/:idUser', financialTransaction.countTransactionByExpense);
routes.get('/financial_transaction/count/essential/:idUser', financialTransaction.countTransactionByEssential);

module.exports = routes;