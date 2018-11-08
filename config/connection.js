//Connect to MySQL
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
});

//Make connection 
connection.connect(function (err) {
    if (err) {
        console.err("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Export connection for ORM to use
module.exports = connection;