
// controller is communicating with database through model 
// so we created a model variables for the employee 
const EmployeeModel = require('../models/employeeModel');

 
// get all employee list
exports.getEmployeeList = (req, res)=> {
    //console.log('here all employees list');
    // the contorller file will pass react form-data request to the model
    // controller recieves from the model and sends back to the reactjs
    EmployeeModel.getAllEmployees((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', employees);
        res.send(employees)
    })
}
 
// search employees by their name 
exports.getEmployeeByName = (req, res)=>{
    //console.log('get emp by id');
    // the contorller file gets the first name and request will be passed to the model
    EmployeeModel.getEmployeeByName(req.params.first_name, (err, employee)=>{
        if(err)
        res.send(err);
        console.log('single employee data',employee);
        res.send(employee);
    })
}
 
 
// creating a new employee
exports.createNewEmployee = (req, res) =>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        // the contorller file will pass react form-data request to the model
        EmployeeModel.createEmployee(employeeReqData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee Created Successfully', data: employee.insertId})
        })
    }
}
 
 
// getting employee by ID  for an Updating the employee(using edit action)
exports.getEmployeeByID = (req, res)=>{
    //console.log('get emp by id');
    // the contorller file will pass react form-data request to the model
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        console.log('single employee data',employee);
        // res.json({"first_name":"Dheeraj"});
        res.send(JSON.stringify({ status: 200, error: null, response: employee }));
    })
}
 
 
// update employee
exports.updateEmployee = (req, res)=>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        // the contorller file will pass react form-data request to the model
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee updated Successfully'})
        })
    }
}
 
// delete employee
exports.deleteEmployee = (req, res)=>{
    // the contorller file will pass react form-data request to the model
    EmployeeModel.deleteEmployee(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Employee deleted successully!'});
    })
}