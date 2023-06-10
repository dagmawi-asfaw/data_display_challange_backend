
import mysql from 'mysql2';
import 'dotenv/config';



// Open the connection to MySQL server
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
});

// Run create database statement
connection.query(
  `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
    (err, results) => {
        if (err) { 
            console.log(err);
        }
  }
);

// Close the connection
connection.end();