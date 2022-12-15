const {faker} = require('@faker-js/faker');
const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'user'
        });

        return this;
    }
}

async function seedUser() {
    if ((await User.findAll()).length > 0) {
        return;
    }

    for (i = 1; i <= 100; i++) {
        await User.create({
            id: i,
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        })
    }
}

module.exports = {
    User,
    seedUser
}