const {faker} = require('@faker-js/faker');
const {Model, DataTypes} = require('sequelize');
const {CustomRepetation} = require('./customRepetation');
const {ScheduleTime} = require('./scheduleTime');

class ToDo extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            estimated_time: DataTypes.STRING,
            deadline: DataTypes.DATE,
            priority: DataTypes.ENUM("HIGH", "MEDIUM", "LOW"),
            completed_at: DataTypes.DATE,
            id_user: DataTypes.INTEGER,
            id_schedule_time: DataTypes.INTEGER,
        },{
            sequelize,
            tableName: 'to_do'
        });

        return this;
    }
}

async function seedToDo() {
    if ((await ToDo.findAll()).length > 0) {
        return;
    }

    for (userId = 1; userId < 100; userId++) {
        const max = Math.floor(Math.random() * 20)

        for (j = 0; j < max; j++) {
            let priority = 'HIGH';

            if (userId % 2 != 0) {
                priority = 'MEDIUM'
            } else if (j % 2 != 0) {
                priority = 'LOW'
            }

            const hasScheduleTime = faker.datatype.boolean();

            try {
                if (hasScheduleTime) {
                    const hasRepetation = faker.datatype.boolean();
                    const hasCustomRepetation = hasRepetation && faker.datatype.boolean();

                    if (hasCustomRepetation) {
                        await CustomRepetation.create({
                            id: +`${userId}${j}`,
                            occurrences_number: faker.datatype.number(),
                            every: faker.datatype.number({
                                min: 1,
                                max: 10
                            }),
                            week_days: faker.date.weekday(),
                        })
                    }

                    let repetationType = 'YEARLY';

                    if (userId % 2 == 0) {
                        repetationType = 'DAILY';
                    } else if (userId % 3 == 0) {
                        repetationType = 'WEEKLY';
                    } else if (userId % 5 == 0) {
                        repetationType = 'MONTHLY';
                    }

                    await ScheduleTime.create({
                        id: +`${userId}${j}`,
                        start_date: faker.date.past(),
                        end_date: faker.date.future(5),
                        has_repetition: hasRepetation,
                        repetition_type: hasRepetation ? repetationType : null,
                        start_time: '14:00:00',
                        end_time: '16:00:00',
                        id_custom_repetation: hasCustomRepetation ? +`${userId}${j}` : null
                    })
                }

                await ToDo.create({
                    id: +`${userId}${j}`,
                    title: faker.lorem.lines(1),
                    description: faker.lorem.lines(2),
                    estimated_time: j % 2 == 0 ? '2h' : '5h',
                    deadline: faker.date.future(),
                    priority,
                    completed_at: faker.datatype.boolean() ? faker.date.future() : null,
                    id_user: userId,
                    id_schedule_time: hasScheduleTime ? +`${userId}${j}` : null
                })
            } catch (error) { }
        }
    }
}

module.exports = {
    ToDo,
    seedToDo
}