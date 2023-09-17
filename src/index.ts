import { Sequelize } from 'sequelize-typescript';
import cors from 'cors';

import { app } from './config/app';

const sequelizeConfig = require('../sequelize.js');

const config = sequelizeConfig[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize(config);

const corsOptions = {
  origin: '*', // Permite a todos los dominios acceder. Para producción, deberías especificar tu dominio, por ejemplo: 'https://tu-dominio.com'
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Permite cookies
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

const start = async () => {
  try {
    console.log('Synchronizing database models...');
    console.log('Starting the API...');
    await app.listen(process.env.port || 3977);
    console.log(`Server running on port ${process.env.port || 3977}`);
  } catch (err) {
    console.error(err);
  }
};

start();
