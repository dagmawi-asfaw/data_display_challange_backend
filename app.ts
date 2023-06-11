import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './src/db/sequelize_db';
import TaskRouter from './src/api/routes/task_routes';
import FileUploadRouter from './src/api/routes/file_upload_route';
import Task from './src/db/models/task_model'; 

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 

const port = process.env.PORT || 3000;
app.use('/task', TaskRouter);

 

app.use('/upload',  cors(),FileUploadRouter); 

sequelize.authenticate().then(async () => {

  console.log('Database connection has been established successfully.');
 
 
  await Task.sync({ alter: true });

  app.listen(3000, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });


}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});


