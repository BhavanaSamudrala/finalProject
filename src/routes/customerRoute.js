const express = require('express');
const router = express.Router();
 
const CustomerController = require('../controllers/customerController');
 
// get all employees
router.get('/', CustomerController.getCustomerList);
 
// get employee by ID
router.get('/:id',CustomerController.getCustomerByID);
 
 
// get employee name for Update 
router.get('/searchRecord/:first_name',CustomerController.getCustomerByName);
 
// create new employee
router.post('/', CustomerController.createNewCustomer);
 
// update employee
router.put('/:id', CustomerController.updateCustomer);
 
// delete employee
router.delete('/:id',CustomerController.deleteCustomer);
 
module.exports = router;