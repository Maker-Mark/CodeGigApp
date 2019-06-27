const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');

//Test the connection. Take the DB call auth(returns a promise)
db.authenticate()
.then(()=> console.log("Database connected!"))
.catch(err => console.log("Error:"+err));

const app = express();

//Add a route that is loading a homepage
app.get('/', (req, res)=>{
    res.send('hello');
});
//Point /Gig to this require (using middleware)
app.use('/gigs', require('./routes/gigs'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));