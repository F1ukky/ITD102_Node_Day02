const config = require('../config/db');
const Sequelize = require('sequelize ');

const dataType = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
);