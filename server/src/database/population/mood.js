const {faker} = require('@faker-js/faker');
const {Model, DataTypes} = require('sequelize');

class Mood extends Model {
    static init(sequelize) {
        super.init({
            date: DataTypes.DATE,
            mood_level: DataTypes.ENUM("AMAZING", "FINE", "OK", "BAD", "AWFUL"),
            id_user: DataTypes.NUMBER,
        },{
            sequelize,
            tableName: 'mood'
        });

        return this;
    }
}

async function seedMood() {
    if ((await Mood.findAll()).length > 0) {
        return;
    }

    for (userId = 1; userId < 100; userId++) {
        const max = Math.floor(Math.random() * 400)
        for (j = 0; j < max; j++) {
            try {
                let moodLevel = '';

                switch(Math.floor(Math.random() * 5)) {
                    case 1:
                        moodLevel = 'AMAZING';
                        break;
                    case 2:
                        moodLevel = 'FINE';
                        break;
                    case 3:
                        moodLevel = 'OK';
                        break;
                    case 4:
                        moodLevel = 'BAD';
                        break;
                    case 5:
                        moodLevel = 'AWFUL';
                        break;
                }

                await Mood.create({
                    id: +`${userId}${j}`,
                    date: faker.date.past(),
                    mood_level: moodLevel,
                    id_user: userId,
                })
            } catch (error) { }
        }
    }
}

module.exports = {
    Mood,
    seedMood
}