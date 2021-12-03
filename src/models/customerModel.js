// the model will perform ADD,DELETE,UPDATE and DISPLAY queires 


var dbConn  = require('../../db.config');
 
var Customer = function(customer){
    this.first_name     =   customer.fname;
    this.last_name      =   customer.lname;
    this.email          =   customer.email;
    this.phone          =   customer.phone;
    this.ptype         =   customer.ptype;
}
 
// get all customers
Customer.getAllCustomers = (result) =>{
    dbConn.query('SELECT * FROM customers ', (err, res)=>{
        if(err){
            console.log('Error while fetching customers', err);
            result(null,err);
        }else{
            console.log('customers fetched successfully');
            result(null,res);    // the result will be sent to the controller 
        }
    })
}
 
// get customer by Name for Search Data by their first name 
Customer.getCustomerByName = (first_name, result)=>{
    dbConn.query('SELECT * FROM Customers WHERE first_name=?', first_name, (err, res)=>{
        if(err){
            console.log('Error while fetching Customer by id', err);
            result(null, err);
        }else{
            result(null, res);   // result will be sent to the controller
        }
    })
}
 
// create new Customer
Customer.createCustomer = (customerReqData, result) =>{
    dbConn.query('INSERT INTO customers SET ?', customerReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Customer created successfully');
            result(null, res)
        }
    })
}
 
 
// get Customer by ID for update
Customer.getCustomerByID = (id, result)=>{
    dbConn.query('SELECT * FROM customers WHERE id=?', id, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching Customer by id', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}
 
 
// update Customer
Customer.updateCustomer = (id, customerReqData, result)=>{
    dbConn.query("UPDATE Customers SET first_name=?,last_name=?,email=?,phone=?,ptype=? WHERE id = ?", [customerReqData.first_name,customerReqData.last_name,customerReqData.email,customerReqData.phone,customerReqData.ptype, id], (err, res)=>{
        if(err){
            console.log('Error while updating the Customer');
            result(null, err);
        }else{
            console.log("Customer updated successfully");
            result(null, res);
        }
    });
}
 
// delete Customer
Customer.deleteCustomer = (id, result)=>{
    dbConn.query('DELETE FROM customers WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the Customer');
            result(null, err);
        }else{
            console.log("Customer deleted successfully");
            result(null, res);
        }
    })
    // dbConn.query("UPDATE customers SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the Customer');
    //         result(null, err);
    //     }else{
    //         console.log("Customer deleted successfully");
    //         result(null, res);
    //     }
    // });
}
 
module.exports = Customer;