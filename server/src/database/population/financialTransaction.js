const {faker} = require('@faker-js/faker');
const {Model, DataTypes} = require('sequelize');

class FinancialTransction extends Model {
    static init(sequelize) {
        super.init({
            value: DataTypes.STRING,
            recurrent: DataTypes.BOOLEAN,
            start_date: DataTypes.DATEONLY,
            completed_at: DataTypes.DATEONLY,
            essential: DataTypes.BOOLEAN,
            is_expense: DataTypes.BOOLEAN,
            id_user: DataTypes.INTEGER
        },{
            sequelize,
            tableName: 'financial_transaction'
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'id_user',
            as: 'user'
        })
    }
}

async function seedFinancialTransction() {
    if ((await FinancialTransction.findAll()).length > 0) {
        return;
    }

    for (userId = 1; userId < 100; userId++) {
        const max = Math.floor(Math.random() * 50)
        for (j = 0; j < max; j++) {
            try {
                await FinancialTransction.create({
                    id: +`${userId}${j}`,
                    value: faker.commerce.price(),
                    recurrent: faker.datatype.boolean(),
                    start_date: faker.date.past(2),
                    completed_at: faker.datatype.boolean() ? faker.date.recent() : null,
                    essential: faker.datatype.boolean(),
                    is_expense: faker.datatype.boolean(),
                    id_user: userId,
                })
            } catch (error) { }
        }
    }
}

module.exports = {
    FinancialTransction,
    seedFinancialTransction
}