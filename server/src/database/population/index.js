const Sequelize = require('sequelize');
const {User, seedUser} = require('./user.js');
const {FinancialTransction, seedFinancialTransction} = require('./financialTransaction');
const {ToDo, seedToDo} = require('./todo');
const {CustomRepetation} = require('./customRepetation');
const {ScheduleTime} = require('./scheduleTime');
const {Sleep, seedSleep} = require('./sleep');
const {Water, seedWater} = require('./water');
const {ConsumedWater, seedConsumedWater} = require('./consumedWater');
const {WorkoutRoutines} = require('./workout_routines');
const {Workout, seedWorkout} = require('./workout');
const {Mood, seedMood} = require('./mood');

const models = [
    User,
    FinancialTransction,
    ToDo,
    CustomRepetation,
    ScheduleTime,
    Sleep,
    Water,
    ConsumedWater,
    WorkoutRoutines,
    Workout,
    Mood,
];

const seeds = [
    seedUser,
    seedFinancialTransction,
    seedToDo,
    seedSleep,
    seedWater,
    seedConsumedWater,
    seedWorkout,
    seedMood,
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

const seeder = async() => {
    for (const index in seeds) {
        await seeds[index]();
    }
}

seeder();

console.log('tudo certin por aqui')