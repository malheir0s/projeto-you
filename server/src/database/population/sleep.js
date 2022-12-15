const {faker} = require('@faker-js/faker');
const {Model, DataTypes} = require('sequelize');

class Sleep extends Model {
    static init(sequelize) {
        super.init({
            sleep_goal: DataTypes.NUMBER,
            start_time: DataTypes.TIME,
            end_time: DataTypes.TIME,
            id_user: DataTypes.NUMBER,
        },{
            sequelize,
            tableName: 'sleep'
        });

        return this;
    }
}

async function seedSleep() {
    if ((await Sleep.findAll()).length > 0) {
        return;
    }

    for (i = 1; i <= 100; i++) {
        await Sleep.create({
            id: i,
            sleep_goal: faker.datatype.float({
                min: 5,
                max: 12
            }),
            start_time: i % 2 == 0 ? "22:00" : "00:00",
            end_time: i % 2 == 0 ? "06:00" : "08:00",
            id_user: i,
        })
    }
}

module.exports = {
    Sleep,
    seedSleep
}