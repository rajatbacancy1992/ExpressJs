const UserMasterModel = require("./UserMasterSchema");
const UserMasterProfileModal = require("./UserMasterProfileUpdateSchema");
const ErrorHandling = require("../../Utility/ErrorHandling/ErrorHandling");
const Common = require("../Common/Common");
var mongoose = require("mongoose");

class UserMasterModal {
  async AddUser(req, response, next) {
    try {
      var result = await UserMasterModel(req.body).save();
      response.json(ErrorHandling.Success(result, "Data inserted"));
    } catch (err) {
      response.json(ErrorHandling.Error(err, "Error"));
    }
  }
  async UpdateUser(condition, request, response) {
    try {
      let result = await UserMasterModel(condition).updateOne(request);
      response.json(ErrorHandling.Success(result, "Data updated"));
    } catch (err) {
      response.json(ErrorHandling.Error(err, "Error"));
    }
  }
  async ProfilePhotoUpload(file, filePath) {
    try {
      let result = await file.mv(`${filePath}`);
      return true;
    } catch (err) {
      return false;
    }
  }
  async DeleteUser(record) {
    try {
      let result = await UserMasterModel.findOneAndDelete(record);
      return true;
    } catch (error) {
      return err;
    }
  }
  async UserExist(req, response) {
    try {
      let result = await UserMasterModel.find(req);
      if (result.length > 0) {
        response.json(ErrorHandling.Success(result[0], "Login successfully"));
      } else {
        response.json(
          ErrorHandling.Error(
            result,
            "You have Entred wrong email or password "
          )
        );
      }
      return result;
    } catch (err) {
      response.json(
        ErrorHandling.Error(err, "There are some technical issue.")
      );
    }
  }
  async UserUpdate(req, response) {
    try {
    } catch (err) {}
  }
  async AllUserList(req, response) {
    try {
      let result = await UserMasterModel.find({});
      response.json(ErrorHandling.Success(result, "All user list"));
    } catch {
      response.json(
        ErrorHandling.Error(err, "There are some technical issue.")
      );
    }
  }
  async GetUserDetail(req, response) {
    try {
      let result = await UserMasterModel.find(req);
      if (result.length > 0) {
        response.json(ErrorHandling.Success(result[0], "User detail"));
      } else {
        response.json(ErrorHandling.Error(result, "User not exist!"));
      }
    } catch (err) {
      response.json(
        ErrorHandling.Error(err, "There are some technical issue.")
      );
    }
  }
}
module.exports = new UserMasterModal();
