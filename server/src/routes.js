const express = require('express');
const user = require('./controllers/user');
const financialTransaction = require('./controllers/financialTransaction');

const routes = express.Router();

routes.get('/users', user.getAllUsers);

routes.get('/financial_transaction/:idUser', financialTransaction.getTransctions);
routes.get('/financial_transaction/count/is_expanse/:idUser', financialTransaction.countTransactionByExpense);
routes.get('/financial_transaction/count/essential/:idUser', financialTransaction.countTransactionByEssential);

module.exports = routes;