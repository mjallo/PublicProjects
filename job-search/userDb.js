const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');

mongoose.connect("mongodb+srv://mjallo:"+process.env.MONGODB_PWD+"@cluster0.fjsgo.mongodb.net/userDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);

Filter = {
  jobname: String,
  city: String
}

const userSchema = new mongoose.Schema ({
  username: {type: String, sparse:true},
  password: String,
  googleId: String,
  offers: [Filter]
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

module.exports = User;
