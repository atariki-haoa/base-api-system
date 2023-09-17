import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import router from '../routes/routes';

export const app = express();

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './tmp/',
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
// configurar cabeceras http

// rutas base
// middleware, para que cada ejecucion tenga una "api" delante en cada petcion http para los controladores.
app.use('/api', router);

export const JWT_SECRET = process.env.JWT_SECRET || 'aPC$c2!RzDpj1$23';
