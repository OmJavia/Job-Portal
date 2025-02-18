const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pickandwin"
});

connection.connect(function(err) {
    if (err) {
        return console.error('error connecting:', err);
        }
    console.log('connected to the database');
});

module.exports = connection;