const UserMaster = require("../Controller/UserMaster")
var fs=require("fs")

module.exports=(app)=>{
 app.post("/add-user",UserMaster.AddUser)
}