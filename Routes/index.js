const UserMaster = require("../Controller/UserMaster")
module.exports=(app)=>{
 app.get("/add-user",UserMaster.AddUser)
}