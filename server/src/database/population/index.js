const Sequelize = require('sequelize');
const {User, seedUser} = require('./user.js');

const models = [
    User,
];

const seeds = [
    seedUser
];

const sequelize = new Sequelize({
    'dialect': 'mysql',
    'host': 'localhost',
    'username': 'user',
    'password': 'password',
    'database': 'mydb',
    'PORT': '3306',
    define: {
        timestamps: false
      }
});

models.map((model) => {
    model.init(sequelize)
});

seeds.map((seed) => {
    seed();
});

console.log('tudo certin por aqui')