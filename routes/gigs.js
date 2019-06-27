const express = require('express');
const rt = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig')

//Make a route for /gigs
rt.get('/', (req,res)=>Gig.findAll()
.then(gigs=>{
    console.log(gigs); //Log the query!
    res.sendStatus(200);
})
.catch(err=>console.log("Error:"+err))); // The findAll() method returns a proomise
console.log("i got to gigs");
module.exports = rt;