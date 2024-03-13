const fs = require("fs");

module.exports = function (dirname, ext, callback) {
  fs.readdir(dirname, (err, list) => {
    if (err) {
      return callback(err);
    }
    const result = [];
    list.forEach((file)=>{
        if (file.split('.')[1] === ext) {
            result.push(file)
        }
    })
    callback(null, result)
  });
};
