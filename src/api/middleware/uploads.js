const multer = require("multer");

// Upload storage settings.
(storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    const date = cb(
      null,
      Date.now() + "-" + file.originalname.replaceAll(" ", "_")
    );
  },
})),
  // String handling of the upload file.
  (fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }),
  // Upload dependency import.
  (uploads = multer({
    storage: storage,
    limits: {
      fieldSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
  }));

module.exports = uploads;
