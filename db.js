const mysql = require('mysql')
const { db } = require('./server/config/db.config.js')
const dbConfig = require('./server/config/db.config.js')
// db.config.js
// Create a connection to the database
const con = mysql.createConnection({
  host: dbConfig.db.host,
  user: dbConfig.db.user,
  password: dbConfig.db.password,
  database: dbConfig.db.database
})
// open the MySQL connection
con.connect((error) => {
  if (error) throw error
  console.log('Successfully connected to the database.')
  //   con.end()
})
module.exports = con

// host: 'eats-db.cgmnjuyneozj.us-east-1.rds.amazonaws.com',
// user: 'admin',
// password: 'eatsdbpsswd',
// database: 'eats'
