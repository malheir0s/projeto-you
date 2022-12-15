const {Model, DataTypes} = require('sequelize');

class WorkoutRoutines extends Model {
    static init(sequelize) {
        super.init({
            sets: DataTypes.NUMBER,
            is_completed: DataTypes.BOOLEAN,
            muscle_group: DataTypes.STRING,
            reps: DataTypes.NUMBER,
            exercise: DataTypes.STRING,
            id_user: DataTypes.NUMBER,
        },{
            sequelize,
            tableName: 'workout_routines'
        });

        return this;
    }
}

module.exports = {
    WorkoutRoutines
}