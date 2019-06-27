const Sequelize = require('sequelize');
const db = require('../config/database');

//create a model
//Fist param is name, second is the object
const Gig = db.define('gig',{
    title:{
        type:Sequelize.STRING //Here lies our defined postgres column items
    },
    technologies: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.STRING
      },
      contact_email: {
        type: Sequelize.STRING
      } 
    
})
module.exports = Gig;

    