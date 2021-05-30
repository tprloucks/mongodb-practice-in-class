const User = require("../model/User");
//exporting an object with key and value
module.exports = {

    getAllUsers: function (callback) {
    //User.find({}) is a mongoose function to query the database
    //it takes in a callback - that returns two parameters - the first one
    //is always error and the second one is payload (Users data)
    User.find({}, function (err, payload) {
        bcrypt.genSalt(10, function (err, salt){

        })
        if (err) {
            callback(err, null);
        } else {
            callback(null, payload);
        }
    });
},
    createUser: function (body, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            callback(err, null);
        } else {
            bcrypt.hash(body.password, salt, function (err, hash) {
            if (err) {
                callback(err, null);
            } else {
            //create a mongodb User OBJECT it will assign a unique ID for the user
            //WHAT IF THERE'S OTHER CHECKS I HAVE TO DO INSIDE THIS BLOCK
            
            //the save() function will save it to the database
            savedUser.save(function (err, payload) {
                callback(err, null);
            if (err) {
            } else {
                callback(null, payload);
            }
            });
        }
        });
    }
    });
}
};