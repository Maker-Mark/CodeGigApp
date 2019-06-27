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
.catch(err=>console.log("Error:"+err))); // The findAll() method returns a promise

//Display the add gig form
router.get('/add', (req,res)=>{
    res.render('add');
}
)

//Add a gig, will receive a post request--NEVER ADD DATA WITH A GET
router.post('/add', (req,res)=>{
   
    //Destructure the data and make all of them local vars
    let {title, technologies, budget, description, contact_email} = req.body;//The body will have all the data
    //Validation: If no data, push on object that has text value telling user to add a title
    let errors = [];
    if(!title){
        errors.push({
            text:'Please add a title...'
        });
    }
    if(!technologies){
        errors.push({
            text:'Please add technologies...'
        });
    }
    if(!description){
        errors.push({
            text:'Please add a description...'
        });
    }
    if(!contact_email){
        errors.push({
            text:'Please add a contact email...'
        });
    }

    if(errors.length  > 0){
        //rerender the form with the values
       res.render('add', 
       {
       errors, title,technologies,budget,description,contact_email
       }) 
    }
    else{
       //Insert into the table. .create returns a promise
       Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
      })
    .then(gig=> res.redirect('/gigs'))
    .catch(err=>console.log("Error:"+err));
      
    }
});

module.exports = router;