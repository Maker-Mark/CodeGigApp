const Sequelize = require('sequelize');
require('dotenv').config();
const pw = process.env.DB_PW;
console.log(pw);
// Option 1: Passing parameters separately @param(name, user,pw, {host:...dialect:..})
module.exports = new Sequelize('codegig', 'postgres', pw, {
  host: 'localhost',
  dialect:  'postgres',
}
);