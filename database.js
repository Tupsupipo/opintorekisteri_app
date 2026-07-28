const mysql = require('mysql2');

const myConnectionString = "mysql://netuser:netpass@localhost:3306/netdb";
const connection = mysql.createPool(myConnectionString);

module.exports = connection;

connection.query('SHOW TABLES', function(err, result, fields){
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Database connection successful', result);
    }
});