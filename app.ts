import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import sequelize from './db/sequelize_db';
 




const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send('Hello World!');
});



sequelize.authenticate().then(() => {
  console.log('Database connection has been established successfully.');
  app.listen(3000, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});


