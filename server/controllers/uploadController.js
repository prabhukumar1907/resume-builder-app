const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const uploadResume = async (req, res) => {
  try {
    const file = req.file.path;

    const result = await cloudinary.uploader.upload(file, {
      resource_type: "raw",
      folder: "resumes",
    });

    fs.unlinkSync(file); // clean up temp file
    res.json({ success: true, url: result.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Upload failed" });
  }
};

module.exports = { uploadResume };
