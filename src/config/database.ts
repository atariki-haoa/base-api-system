const { Sequelize } = require('sequelize-typescript');
const config = require('./sequelize.js').development; // Asume que estás en modo desarrollo

const sequelize = new Sequelize(config);

module.exports = sequelize;
