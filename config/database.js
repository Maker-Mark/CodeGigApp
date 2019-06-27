const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('codegig', 'postgres', '123', {
  host: 'localhost',
  dialect:  'postgres',
}
);