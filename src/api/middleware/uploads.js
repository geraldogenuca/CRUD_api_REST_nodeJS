const multer = require('multer')

storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/');
    },
    filename: (req, file, cb) => {
        const date = 
        cb(
            null, 
            Date.now() + '-' + file.originalname.replaceAll(" ", "_")
        )
    },
}),

fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || 
        file.mimetype === 'image/jpg' || 
        file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
},

uploads = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

module.exports = uploads