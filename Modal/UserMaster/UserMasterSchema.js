var mongoose = require("mongoose");
var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  mobileNumber: String,
  address: {type:String,required:true},
});
module.exports = mongoose.model("user_master", nameSchema);
