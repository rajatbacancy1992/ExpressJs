var mongoose = require("mongoose");
var nameSchema = new mongoose.Schema({
  fisrt_name: String,
  last_name: String,
  mobile_number: String,
  address: String,
  email_address: String,
  password: String,
  height: String,
  weight: String,
  occuption: String,
  income: String,
  password: String,
  profile_picture: String,
  father_name: String,
  mother_name: String,
  father_occuption: String,
  father_income: String,
  mother_name: String,
  mother_occuption: String,
  mother_income: String,
});
module.exports = mongoose.model("user_master", nameSchema);
