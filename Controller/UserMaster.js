const UserMasterModal = require("../Modal/UserMaster/UserMasterModal");
const ErrorHandling = require("../Utility/ErrorHandling/ErrorHandling");
const nodemailer = require("nodemailer");

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
  async Main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "brianne.jacobi78@ethereal.email", // generated ethereal user
        pass: "WZFVs6rVEBH8YHm1yx", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, rajatdoshi11@outlook.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
}
module.exports = new UserMaster();
