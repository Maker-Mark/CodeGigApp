const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');//Our model

//Make a route for /gigs and get the list of gigs
router.get('/', (req,res)=>Gig.findAll()
.then(gigs=>{
    console.log(gigs); //Log the query!
    res.render('gigs', {gigs});
})
.catch(err=>console.log("Error:"+err))); // The findAll() method returns a proomise

//Display the add gig form
router.get('/add', (req,res)=>{
    res.render('add');

}
)

//Add a gig, will receive a post request--NEVER ADD DATA WITH A GET
router.get('/add', (req,res)=>{
    const data = {
        title:'Wordpress smart guy',
        technologies:'wordpress,static sites, java, html',
        budget:'$9001',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        contact_email: 'user2@gmail.com',
    }
    //Destructure the data and make all of them local vars
    let {title,technologies,budget,description,contact_email} = data
    //Insert into the table. .create returns a promise
    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email
    })
    .then(gig=> res.redirect('/gigs'))
    .catch(err=>console.log("Error:"+err));
})


module.exports = router;