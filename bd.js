const mysql = require('mysql');
const util = require('util');

let pool = mysql.createConnection({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'hwdesign'  
});

pool.query = util.promisify(pool.query);

module.exports = pool;