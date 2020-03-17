var mongoose = require('mongoose');
var nameSchema = new mongoose.Schema({
  firstName: String,
  lastNameName: String
});
module.exports = mongoose.model("user_master", nameSchema);