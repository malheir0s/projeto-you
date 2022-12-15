const {faker} = require('@faker-js/faker');
const {Model, DataTypes} = require('sequelize');

class Water extends Model {
    static init(sequelize) {
        super.init({
            amount_in_day: DataTypes.NUMBER,
            amount_at_time: DataTypes.NUMBER,
            id_sleep: DataTypes.NUMBER,
            id_user: DataTypes.NUMBER,
        },{
            sequelize,
            tableName: 'water'
        });

        return this;
    }
}

async function seedWater() {
    if ((await Water.findAll()).length > 0) {
        return;
    }

    for (i = 1; i <= 100; i++) {
        await Water.create({
            id: i,
            amount_in_day: faker.datatype.float({
                min: 1,
                max: 6
            }),
            amount_at_time: faker.datatype.float({
                min: 0.2,
                max: 0.5
            }),
            id_sleep: i,
            id_user: i,
        })
    }
}

module.exports = {
    Water,
    seedWater
}