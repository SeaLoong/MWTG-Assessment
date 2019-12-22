const fs = require('fs');
const Sequelize = require('sequelize');

const config = JSON.parse(fs.readFileSync('config.json', 'r'));

const mysql = new Sequelize('MWTG-Assessment', config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

await sequelize.authenticate();
console.log('Connection has been established successfully.');

exports = mysql;