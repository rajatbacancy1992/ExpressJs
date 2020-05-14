const UserMasterModel = require("./UserMasterSchema");
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
  async UpdateUser(result) {
    try {
      await UserMasterModal({ _id: result.id }).updateOne(result);
      return true;
    } catch (err) {
      return false;
    }
  }
  async ProfilePhotoUpload(file) {
    try {
      let result = await file.userPhoto.mv(
        `./Upload/${Math.random() * 10000000000000}${file.name}`
      );
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
      return false;
    }
  }
  async UserExist(req,response) {
    try {
      let result = await UserMasterModel.find(req);
      console.log(result)
      if (result.length > 0) {
        response.json(ErrorHandling.Success(result[0], "Login successfully"));
      } else {
        response.json(
          ErrorHandling.Error(result, "You have Entred wrong email or password ")
        );
      }
      return result;
    } catch (err) {
      response.json(
        ErrorHandling.Error(err, "There are some technical issue.")
      );
    }
  }
}
module.exports = new UserMasterModal();
