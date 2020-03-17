const UserMasterModal=require("../Modal/UserMaster/UserMasterModal")
class UserMaster {
  AddUser(req, res) {
    console.log(UserMasterModal.AddUser(req,res))
  }
}
module.exports = new UserMaster();
