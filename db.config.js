const mysql = require('mysql');
// create here mysql connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'mypass',
    database: 'staff_db'
});
dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})
module.exports = dbConn;