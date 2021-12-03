// controller is communicating with database through model 
// so we created a model variables for the Customer
const CustomerModel = require('../models/customerModel');

 
// get all Customer list
exports.getCustomerList = (req, res)=> {
    //console.log('here all Customers list');
    // the contorller file will pass react form-data request to the model
    // controller recieves from the model and sends back to the reactjs
    CustomerModel .getAllCustomers((err, customers) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Customers', customers);
        res.send(customers)
    })
}
 
// search Customer by their name 
exports.getCustomerByName = (req, res)=>{
    //console.log('get emp by id');
    // the contorller file gets the first name and request will be passed to the model
    CustomerModel.getCustomerByName(req.params.first_name, (err, customer)=>{
        if(err)
        res.send(err);
        console.log('single Customer data',customer);
        res.send(customer);
    })
}
 
 
// creating a new Customer
exports.createNewCustomer = (req, res) =>{
    const customerReqData = new CustomerModel(req.body);
    console.log('customerReqData', customerReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        // the contorller file will pass react form-data request to the model
        CustomerModel.createCustomer(customerReqData, (err, customer)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Customer Created Successfully', data: customer.insertId})
        })
    }
}
 
 
// getting Customer by ID  for an Updating the Customer(using edit action)
exports.getCustomerByID = (req, res)=>{
    //console.log('get emp by id');
    // the contorller file will pass react form-data request to the model
    CustomerModel.getCustomerByID(req.params.id, (err, customer)=>{
        if(err)
        res.send(err);
        console.log('single Customer data',customer);
        // res.json({"first_name":"Dheeraj"});
        res.send(JSON.stringify({ status: 200, error: null, response: customer }));
    })
}
 
 
// update Customer
exports.updateCustomer = (req, res)=>{
    const customerReqData = new CustomerModel(req.body);
    console.log('customerReqData update', customerReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        // the contorller file will pass react form-data request to the model
        CustomerModel.updateCustomer(req.params.id, customerReqData, (err, customer)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Customer updated Successfully'})
        })
    }
}
 
// delete Customer
exports.deleteCustomer = (req, res)=>{
    // the contorller file will pass react form-data request to the model
    CustomerModel.deleteCustomer(req.params.id, (err, customer)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Customer deleted successully!'});
    })
}