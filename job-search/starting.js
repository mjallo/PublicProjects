const express = require("express");

const router = express.Router();




router.get("/", function(req, res){
  res.render("starting");
});



router.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

module.exports = router;
