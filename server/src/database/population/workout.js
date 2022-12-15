const {faker} = require('@faker-js/faker');
const {Model, DataTypes} = require('sequelize');
const {WorkoutRoutines}  = require('./workout_routines');

class Workout extends Model {
    static init(sequelize) {
        super.init({
            date: DataTypes.DATE,
            is_completed: DataTypes.BOOLEAN,
            id_user: DataTypes.NUMBER,
            id_workout_routine: DataTypes.NUMBER,
        },{
            sequelize,
            tableName: 'workout'
        });

        return this;
    }
}

async function seedWorkout() {
    if ((await Workout.findAll()).length > 0) {
        return;
    }

    for (userId = 1; userId < 100; userId++) {
        const max = Math.floor(Math.random() * 50)
        for (j = 0; j < max; j++) {
            try {
                await WorkoutRoutines.create({
                    id: +`${userId}${j}`,
                    sets: faker.datatype.number({
                        min: 2,
                        max: 6
                    }),
                    is_completed: faker.datatype.boolean(),
                    muscle_group: faker.lorem.word(),
                    reps: faker.datatype.number({
                        min: 9,
                        max: 25
                    }),
                    exercise: faker.lorem.word(),
                    id_user: userId,
                })
                
                for (k = 0; j < max; k++) {
                    await Workout.create({
                        id: +`${userId}${j}${k}`,
                        consumed_at: faker.date.past(),
                        amount: faker.datatype.float({
                            max: 0.5,
                            min: 0.1
                        }),
                        id_user: userId,
                        id_workout_routine: +`${userId}${j}`
                    })
                }
            } catch (error) { }
        }
    }
}

module.exports = {
    Workout,
    seedWorkout
}