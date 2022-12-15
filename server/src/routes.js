const express = require('express');
const user = require('./controllers/user');
const financialTransaction = require('./controllers/financialTransaction');
const todos = require('./controllers/todos');

const routes = express.Router();

//rotas dos usuários
routes.get('/users', user.getAllUsers);
routes.post('/users', user.addUser);

// rotas de financial_transaction
routes.get('/financial_transaction/:idUser', financialTransaction.getTransctions);
routes.get('/financial_transaction/count/is_expanse/:idUser', financialTransaction.countTransactionByExpense);
routes.get('/financial_transaction/count/essential/:idUser', financialTransaction.countTransactionByEssential);

// rotas de TO DOS
routes.get('/todos', todos.getTodosByUser); // EX: GET /todos?user_id=2&start_date=2023-01-01&end_date=2024-01-01
routes.post('/todos', todos.addTodo);
routes.get('/todos/completed', todos.getCompletedOnTimeWithGoodMood) // GET /todos/completed?user_id=3

module.exports = routes;