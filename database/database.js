const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite:database.db');

sequelize.sync({force: true});

module.exports = sequelize;