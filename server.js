const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
 
const app = express();
 
app.use(cors())
 
// setup the server port
const port = process.env.PORT || 8080;
 

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));
 
// parse request data content type application/json
app.use(bodyParser.json());
 
// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});

// import employee routes
const employeeRoutes = require('./src/routes/employeeRoute');
// import customer routes
const customerRoutes = require('./src/routes/customerRoute');
 
// create employee routes(they are going to be different routes for different functions)
app.use('/api/v1/employee', employeeRoutes);
 // create customer routes
app.use('/api/v1/customer', customerRoutes);
 

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});