const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const { uploadResume, editResume } = require('../controllers/resumeController');

router.post('/upload', upload.single('resume'), uploadResume);

router.put('/edit', upload.single('resume'), editResume);

module.exports = router;
