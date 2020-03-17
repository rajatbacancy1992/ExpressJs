const UserMasterModel = require("./UserMasterSchema");
const ErrorHandling = require("../../Utility/ErrorHandling/ErrorHandling");
class UserMasterModal {
  AddUser(req, response) {
    new UserMasterModel({ firstName: "data", lastNameName: "ds" })
      .save()
      .then(res => {
        response.json(ErrorHandling.Success(res, "Data inserted"));
      })
      .catch(err => {
        response.json(ErrorHandling.Error(err));
      });
  }
}
module.exports = new UserMasterModal();
