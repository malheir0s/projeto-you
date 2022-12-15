const {faker} = require('@faker-js/faker');
const {Model, DataTypes} = require('sequelize');

class ConsumedWater extends Model {
    static init(sequelize) {
        super.init({
            consumed_at: DataTypes.DATE,
            amount: DataTypes.FLOAT,
            id_user: DataTypes.NUMBER,
        },{
            sequelize,
            tableName: 'consumed_water'
        });

        return this;
    }
}

async function seedConsumedWater() {
    if ((await ConsumedWater.findAll()).length > 0) {
        return;
    }

    for (userId = 1; userId < 100; userId++) {
        const max = Math.floor(Math.random() * 50)
        for (j = 0; j < max; j++) {
            try {
                await ConsumedWater.create({
                    id: +`${userId}${j}`,
                    consumed_at: faker.date.past(),
                    amount: faker.datatype.float({
                        max: 0.5,
                        min: 0.1
                    }),
                    id_user: userId,
                })
            } catch (error) { }
        }
    }
}

module.exports = {
    ConsumedWater,
    seedConsumedWater
}