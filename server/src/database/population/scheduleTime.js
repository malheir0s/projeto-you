const {Model, DataTypes} = require('sequelize');

class ScheduleTime extends Model {
    static init(sequelize) {
        super.init({
            start_date: DataTypes.DATEONLY,
            end_date: DataTypes.DATEONLY,
            has_repetition: DataTypes.BOOLEAN,
            repetition_type: DataTypes.ENUM("DAILY", "WEEKLY", "MONTHLY", "YEARLY"),
            start_time: DataTypes.TIME,
            end_time: DataTypes.TIME,
            id_custom_repetation: DataTypes.INTEGER,
        },{
            sequelize,
            tableName: 'schedule_time'
        });

        return this;
    }
}

module.exports = {
    ScheduleTime
}