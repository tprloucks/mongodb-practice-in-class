var express = require("express");
var router = express.Router();
//bring in the User controller
var productController = require("./controller/productController");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({
    test: true,
  });
});
router.get("/get-all-products", function (req, res) {
  productController.getAllProduct(function (err, payload) {
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload });
    }
  });
});

router.post("/create-product", function(req, res){
  productController.createProduct(req.body, function(err, payload){
    if (err){
      res.status(500).json({message: "Error", error: err})
    }else{
      res.json({message:"success", data: payload})
    }
  })
})

router.put("/update-product", function (req, res){
  updateProduct(req.body)
  .then((payload)=>{
    res.json({message:"success", data: payload})
  })
  .catch((error)=>{
    res.status(500).json({message: "error, error"})
  })
})

router.delete("/delete-product-by-id/:id", function (req, res) {
  deleteProductByID(req.params.id)
    .then((deletedProduct) => res.json({ message: "success", deletedProduct }))
    .catch((error) =>
      res.status(500).json({ message: "error", error: error.message })
    );
});

module.exports = router;
