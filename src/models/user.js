const sequelize = require('../../database/database');
const { Model, DataTypes } = require('sequelize');

class User extends Model {}

User.init({
    msisdn: DataTypes.STRING,
    name: DataTypes.STRING,
    access_level: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'user',
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = User;