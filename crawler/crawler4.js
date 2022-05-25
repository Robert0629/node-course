const mysql = require('mysql2/promise');

require('dotenv').config();

(async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_POET,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  let [data, fields] = await connection.execute('SELECT * FROM stocks');
  console.log(data);

  let mapResult = data.map(async(stock) => {
   let reponse = await axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
    params: {
      // 設定 query string
      response: 'json',
      date: '20220301',
      stockNo: '2330',
    },
  });
  return 
  })

  connection.end();
})();