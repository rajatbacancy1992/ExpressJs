const UserMasterModal=require("../Modal/UserMaster/UserMasterModal")
class UserMaster {
  AddUser(req, res) {
    console.log(req.body)
    res.json({"sds":"sds"})
    //UserMasterModal.AddUser(req,res)
  }
}
module.exports = new UserMaster();
