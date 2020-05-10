
const UserMasterModal = require("../Modal/UserMaster/UserMasterModal");

class UserMaster {
  AddUser(req, res,next) {
    UserMasterModal.AddUser(req,res,next)
  }
}
module.exports = new UserMaster();
