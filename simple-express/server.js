const express = require('express');
const app = express();

const path = require('path');

const cors = require('cors');
app.use(cors());

const mysql = require('mysql2/promise');
require('dotenv').config();

let pool = mysql.createPool({
  host: process.env.DB_HOST,
  //   port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  connectionLimit: 10,
});

app.get('/stocks', async (req, res, next) => {
  let [data, fields] = await pool.execute('SELECT * FROM stocks');
  res.json(data);
});

app.get('/stocks/:stockId', async (req, res, next) => {
  let [data, fields] = await pool.execute(
    'SELECT * FROM stocks WHERE id = ' + req.params.stockId
  );

  res.json(data);
});
// app.get('/', (request, response, next) => {
//   response.send('OK');
// });

// app.get('/about', (request, response, next) => {
//   response.send('About me');
// });

app.listen(3001, () => {
  console.log('start server at port 3000');
});
