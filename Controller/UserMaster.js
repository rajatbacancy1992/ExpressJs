const UserMasterModal = require("../Modal/UserMaster/UserMasterModal");
const ErrorHandling = require("../Utility/ErrorHandling/ErrorHandling");
class UserMaster {
  AddUser(req, res, next) {
    UserMasterModal.AddUser(req, res, next);
  }
  Login(req, res, next) {
    UserMasterModal.UserExist(req.body, res, next);
  }
  UpdateUser(req, res, next) {
    UserMasterModal.UpdateUser({ _id: req.body._id }, { ...req.body }, res);
  }
  AllUserList(req, res, next) {
    let result = UserMasterModal.AllUserList(req, res, next);
  }
  GetUserDetail(req, res, next) {
    UserMasterModal.GetUserDetail(req.body, res);
  }
  ProfilePhotoUpload(req, res, next) {
    let FilePath = `Uploads/${Math.random() * 10000000000000}${
      req.files.profile_picture.name
    }`;
    let result = UserMasterModal.ProfilePhotoUpload(
      req.files.profile_picture,
      FilePath
    );
    result.then((resResult) => {
      if (resResult) {
        try {
          console.log(req.body._id);
          UserMasterModal.UpdateUser(
            { _id: req.body._id },
            { profile_picture: FilePath },
            res
          );
        } catch (err) {
          res.json(ErrorHandling.Error(err, "Error"));
        }
      } else {
        res.json(ErrorHandling.Error(result, "Error"));
      }
    });
  }
}
module.exports = new UserMaster();
