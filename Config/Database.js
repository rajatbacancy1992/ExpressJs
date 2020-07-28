var mongoose = require("mongoose");
  //Import the mongoose module
  //Set up default mongoose connection
  
  var mongoDB =
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
    module.exports = mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("DB connnection successful!"))
    .catch(() => console.error.bind(console, "MongoDB connection error:"));
