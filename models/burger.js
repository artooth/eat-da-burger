//Import the ORM to creat functions that will interact with the database
let orm = require("../config/orm.js");

// To Do: create the code that will call the ORM functions using burger specific input for the ORM.


let burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    //The variables col and vals are arrays
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updates: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};


//Export the database function for the controller(burgers_controller.js)
module.exports = burger;