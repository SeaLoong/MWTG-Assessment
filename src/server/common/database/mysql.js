const fs = require('fs');
const Sequelize = require('sequelize');
const db = require('../config/db');

let mysql = new Sequelize('MWTG_Assessment', db.username, db.password, {
  host: db.host,
  port: db.port,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

const testConnection = () => mysql.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
  setTimeout(testConnection, 60e3);
});

testConnection();

module.exports = mysql;