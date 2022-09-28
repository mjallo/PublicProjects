//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const authRouter  = require("./auth");
const indexRouter = require("./starting");
const userRouter = require("./user");

const app = express();


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use("/", authRouter);
app.use("/", indexRouter);
app.use("/", userRouter);









app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000.");
});
