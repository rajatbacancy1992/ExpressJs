class Common {
  FileUpload(file, path) {
    path=path+file.name
   
    file.mv(path, function (err, result) {
      if (err) {
        throw err;
      }
      if (result) {
        console.log(result);
      }
    });
  }
}
module.exports = new Common();
