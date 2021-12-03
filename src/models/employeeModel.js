
// the model will perform ADD,DELETE,UPDATE and DISPLAY queires 


var dbConn  = require('../../db.config');
 
var Employee = function(employee){
    this.first_name     =   employee.fname;
    this.last_name      =   employee.lname;
    this.email          =   employee.email;
    this.phone          =   employee.phone;
    this.ptype         =   employee.ptype;
}
 
// get all employees
Employee.getAllEmployees = (result) =>{
    dbConn.query('SELECT * FROM employees where ptype = "customer"', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Employees fetched successfully');
            result(null,res);    // the result will be sent to the controller 
        }
    })
}
 
// get employee by Name for Search Data by their first name 
Employee.getEmployeeByName = (first_name, result)=>{
    dbConn.query('SELECT * FROM employees WHERE first_name=?', first_name, (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }else{
            result(null, res);   // result will be sent to the controller
        }
    })
}
 
// create new employee
Employee.createEmployee = (employeeReqData, result) =>{
    dbConn.query('INSERT INTO employees SET ?', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Employee created successfully');
            result(null, res)
        }
    })
}
 
 
// get employee by ID for update
Employee.getEmployeeByID = (id, result)=>{
    dbConn.query('SELECT * FROM employees WHERE id=?', id, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}
 
 
// update employee
Employee.updateEmployee = (id, employeeReqData, result)=>{
    dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,ptype=? WHERE id = ?", [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.ptype, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("Employee updated successfully");
            result(null, res);
        }
    });
}
 
// delete employee
Employee.deleteEmployee = (id, result)=>{
    dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the employee');
            result(null, err);
        }else{
            console.log("Employee deleted successfully");
            result(null, res);
        }
    })
    // dbConn.query("UPDATE employees SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the employee');
    //         result(null, err);
    //     }else{
    //         console.log("Employee deleted successfully");
    //         result(null, res);
    //     }
    // });
}
 
module.exports = Employee;