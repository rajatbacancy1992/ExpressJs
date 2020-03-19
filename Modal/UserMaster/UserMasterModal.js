const UserMasterModel = require("./UserMasterSchema");
const ErrorHandling = require("../../Utility/ErrorHandling/ErrorHandling");
const saveAs = require("file-saver");
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "Uploads");
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname + "-" + Date.now());
  }
});
var upload = multer({ storage: storage }).single("image");
class UserMasterModal {
  AddUser(req, response) {
    console.log(req.params)
    response.json({err:req.params})
    return
    // response.json({data:req})
    // return
    //console.log(saveAs.saveAs())
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
