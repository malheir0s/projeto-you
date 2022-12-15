const Sequelize = require('sequelize');
const {User, seedUser} = require('./user.js');
const {FinancialTransction, seedFinancialTransction} = require('./financialTransaction');

const models = [
    User,
    FinancialTransction,
];

const seeds = [
    seedUser,
    seedFinancialTransction,
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

/*models.map((model) => {
    if (model.associate) {
        model.associate(models)
    }
})*/

seeds.map(async (seed) => {
    await seed();
});

console.log('tudo certin por aqui')