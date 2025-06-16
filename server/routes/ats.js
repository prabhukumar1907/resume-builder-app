const express = require("express");
const multer = require("multer");
const { checkATSScore } = require("../controllers/atsController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/score", upload.single("resume"), checkATSScore);

module.exports = router;
