const User = require("../model/User");
//exporting an object with key and value
module.exports = {

    getAllUsers: function () {
        return new Promise(function (resolve, reject) {
        User.find({})
            .then((payload) => {
                resolve(payload);
            })
            .catch((error) => {
                reject(error);
            });
        });
    },
    createUser: function (body) {
        return new Promise((resolve, reject)=>{
            bcrypt
                .genSalt(10)
                .then((salt)=>{
                    return bcrypt.hash(body.password, salt)
                })
                .then((hashedPassword)=>{
                    let savedUser = new User({
                        lastName: body.lastName,
                        password: hash,
                        email: body.email,
                        username: body.username,
                        firstName: body.firstName,
                    });
                    return savedUser.save()
                })
                .then((savedUser)=>{
                    resolve(savedUser)
                })
                .catch((error)=>{
                    reject(error)
                })
        })

    },
    updateUserByID: function (id, body) {
        return new Promise((resolve, reject) => {
          User.findByIdAndUpdate({ _id: id }, body, { new: true })
            .then((updatedUser) => resolve(updatedUser))
            .catch((error) => reject(error));
        });
      },
      deleteUserByID: function (id) {
        return new Promise((resolve, reject) => {
          User.findByIdAndRemove({ _id: id })
            .then((deletedUser) => resolve(deletedUser))
            .catch((error) => reject(error));
        });
      },
    
}
