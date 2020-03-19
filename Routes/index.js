const UserMaster = require("../Controller/UserMaster")
module.exports=(app)=>{
 app.post("/add-user",UserMaster.AddUser)
}