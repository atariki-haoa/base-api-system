const path = require('path');

module.exports = {
  development: {
    database: process.env.DATABASE_NAME || 'eventsmanager',
    dialect: 'postgres',
    username: process.env.DATABASE_USER || 'eventsmanager',
    password: process.env.DATABASE_PASSWORD || 'eventsmanager',
    host: 'localhost',
    models: [path.join(__dirname, 'src/models/*.ts')],
  },
};
