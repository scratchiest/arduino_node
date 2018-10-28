const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dragons132',
    database: 'arduino_dht11'
});

module.exports = conn;