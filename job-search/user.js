const express = require("express");
const router = express.Router();
const User = require("./userDb");


router.get("/home", function(req, res){
  if(req.isAuthenticated()){
    res.render("home", {jobs: req.user.offers});
  }else{
    res.redirect("/login");
  }
});

router.route("/offer")
  .get(function(req, res) {
    if (req.isAuthenticated()) {
      res.render("offer");
    } else {
      res.redirect("/login");
    }
  })
  .post(function(req, res) {
    if (req.isAuthenticated()) {
      User.findByIdAndUpdate(req.user.id, {
        $push: {
          offers: {
            jobname: req.body.jobname,
            city: req.body.city
          }
        }
      }, function(err){
        if(err){
          res.redirect("/error");
        }else{
          res.redirect("/home");
        }
      })
    } else {
      res.redirect("/login");
    }
  });


router.route("/search")
  .get(function(req, res) {
    if (req.isAuthenticated()) {
      res.render("search");
    } else {
      res.redirect("/login");
    }
  })
  .post(function(req, res) {

  });




module.exports = router;
