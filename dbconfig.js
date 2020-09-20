
 const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodeapi',
    port:'3306'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Mysql connected');
});

module.exports=connection;