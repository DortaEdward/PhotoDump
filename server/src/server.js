const express = require('express');
const cors = require('cors');
const volleyball = require('volleyball');
const helmet = require('helmet');
const { notFound, errorHandler, isLoggedIn, checkTokenSetUser } = require('./middlewares');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;
const corsOrigin = process.env.ORIGIN || `http://localhost:8080`

const authRoute = require('./auth');
const userRoute = require('./api/user');
require('./db/db');

var corsOptions = {
  origin: corsOrigin,
  optionsSuccessStatus: 200
}

app.use(cors());
app.use(volleyball);
app.use(helmet());
app.use(express.json());
app.use(checkTokenSetUser);

app.get('/', async (req,res) => {
  res.json({
    status: res.statusCode,
    message:'Welcome to PhotoDump API',
  });
})

app.use(`/api/v${process.env.VERSION}/auth`, authRoute);
app.use(`/api/v${process.env.VERSION}/user`,isLoggedIn, userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});