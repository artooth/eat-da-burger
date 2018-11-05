let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",
    database: "burger_db"
});

function afterConnection() {
    connection.query("SELECT * FROM burgers", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

module.exports = connection;