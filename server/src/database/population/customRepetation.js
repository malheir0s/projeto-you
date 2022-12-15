const {Model, DataTypes} = require('sequelize');

class CustomRepetation extends Model {
    static init(sequelize) {
        super.init({
            occurrences_number: DataTypes.INTEGER,
            every: DataTypes.INTEGER,
            week_days: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'custom_repetation'
        });

        return this;
    }
}

module.exports = {
    CustomRepetation
}