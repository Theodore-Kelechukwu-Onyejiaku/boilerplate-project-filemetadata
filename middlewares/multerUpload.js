const multer = require("multer");

// configure multer for your server folder
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //ensure that this folder already exists in your project directory
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//Here we configure what our storage and filefilter will be. And it is storage and imageFileFilter we created above
exports.upload = multer({ storage: storage });
