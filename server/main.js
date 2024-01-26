'use strict';

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const { checkAuth } = require('./middlewares/auth');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend Server');
});

app.get('/api/hello', checkAuth, (req, res) => {
  res.send('HELLO WORLD from Backend (access only for authorized users)');
});

app.use((err, req, res, next) => {
  res.send(err.message);
});

app.listen(process.env.PORT, () => {
  console.log(`Listen on ${process.env.PORT}...`)
});
