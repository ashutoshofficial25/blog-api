const multer = require("multer");

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "../public/blogImages");
   },
   filename: (req, file, cb) => {
      cb(null, file.originalname);
   },
});

exports.uploader = multer({ storage: storage });

exports.uploadImage = async (req, res) => {
   try {
      if (!req.file) {
         return res
            .status(400)
            .json({ data: null, message: "No file was uploaded." });
      }
      res.status(200).json({ data: "", message: "file uploaded successfully" });
   } catch (error) {
      return res
         .status(400)
         .json({ data: error, message: "No file was uploaded." });
   }
};
