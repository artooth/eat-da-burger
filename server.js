let express = require("express");

let exphbs = require("express-handlebars");

let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static("public"));

//Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars

app.engine("handlebars", exphbs({ deafultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give server access to them

let routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start server to listen to requests
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost: " + PORT);
});