const Product = require("../model/Product")

module.exports = {
    getAllProducts: function (callback){
        Product.find({}, function(err, payload){
            if (err){
                callback(err, null)
            }else{
                callback(null, payload)
            }
        })
    },
    createProduct: function(body, callback){
        let createdProduct = new Product({
            name: body.name
        })
        createdUser.save(function(err, payload){
            if (err){
                callback(err, null)
            }else{
                callback(null, payload)
            }
        })
    },

    updateProductByID: function (id, body) {
        return new Promise((resolve, reject) => {
            Product.findByIdAndUpdate({ _id: id }, body, { new: true })
            .then((updatedProduct) => resolve(updatedProduct))
            .catch((error) => reject(error));
        });
    },

    deleteUserByID: function (id) {
        return new Promise((resolve, reject) => {
            Product.findByIdAndRemove({ _id: id })
            .then((deletedProduct) => resolve(deletedProduct))
            .catch((error) => reject(error));
        });
    },
}