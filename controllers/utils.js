const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/blogImages");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploader = multer({ storage: storage });

exports.uploadImage = async (req, res) => {
  console.log("Uploading image", req.file);

  try {
    const file = req.files.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    await uploader.single("file");
    res.status(200).json({ message: "file successfully uploaded" });
  } catch (error) {
    return res.status(400).json({ message: "No file uploaded" });
  }
};
