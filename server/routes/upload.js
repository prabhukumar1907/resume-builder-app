const express = require("express");
const multer = require("multer");
const { uploadResume } = require("../controllers/uploadController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/resume", upload.single("resume"), uploadResume);

module.exports = router;
