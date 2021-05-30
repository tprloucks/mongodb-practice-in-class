
var express = require("express");
var router = express.Router();
//bring in the User controller
var userController = require("./controller/userController");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({
    test: true,
  });
});
router.get("/get-all-users", function (req, res) {
  getAllUsers
  .then((payload) => {
    res.json({ message: "success", data: payload });
  })
  .catch((error) => {
    res.status(500).json({ message: "error", error });
  });

});

router.post("/create-user", function (req, res) {
  createUser(req.body)
    .then((payload) => {
      res.json({ message: "success", data: payload });
    })
    .catch((error) => {
      res.status(500).json({ message: "error", error });
    });
});

router.put("/update-user", function (req, res){
  updateUser(req.body)
  .then((payload)=>{
    res.json({message:"success", data: payload})
  })
  .catch((error)=>{
    res.status(500).json({message: "error, error"})
  })
})

router.delete("/delete-user-by-id/:id", function (req, res) {
  deleteUserByID(req.params.id)
    .then((deletedUser) => res.json({ message: "success", deletedUser }))
    .catch((error) =>
      res.status(500).json({ message: "error", error: error.message })
    );
});


module.exports = router;





