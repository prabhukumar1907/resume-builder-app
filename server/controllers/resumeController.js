const fs = require('fs/promises');
const cloudinary = require('../config/cloudinary');
const Resume = require('../models/Resume');

// Upload new resume (create)
const uploadResume = async (req, res) => {
  const { userId } = req.body; // or req.params

  if (!req.file) {
    return res.status(400).json({ error: "Resume file is required" });
  }
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    // Check if user already has a resume
    const existing = await Resume.findOne({ userId });
    if (existing) {
      return res.status(400).json({ error: "Resume already exists, use edit endpoint instead" });
    }

    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",
      folder: "resumes",
      public_id: `${userId}_${Date.now()}`.replace(/\.[^/.]+$/, ""),
    });

    const newResume = new Resume({
      userId,
      resumeUrl: uploadResult.secure_url,
      cloudinaryPublicId: uploadResult.public_id,
    });

    await newResume.save();

    res.json({ message: "Resume uploaded successfully", resume: newResume });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Failed to upload resume" });
  } finally {
    await fs.unlink(req.file.path).catch(() => {});
  }
};

// Edit/update resume
const editResume = async (req, res) => {
  const { userId } = req.body; // or req.params

  if (!req.file) {
    return res.status(400).json({ error: "New resume file is required" });
  }
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  try {
    const existing = await Resume.findOne({ userId });
    if (!existing) {
      return res.status(404).json({ error: "Resume not found for this user" });
    }

    // Upload new file
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw",
      folder: "resumes",
      public_id: `${userId}_${Date.now()}`.replace(/\.[^/.]+$/, ""),
    });

    // Delete old resume file from Cloudinary
    if (existing.cloudinaryPublicId) {
      await cloudinary.uploader.destroy(existing.cloudinaryPublicId, { resource_type: "raw" });
    }

    // Update DB record
    existing.resumeUrl = uploadResult.secure_url;
    existing.cloudinaryPublicId = uploadResult.public_id;
    existing.updatedAt = new Date();

    await existing.save();

    res.json({ message: "Resume updated successfully", resume: existing });
  } catch (err) {
    console.error("Edit error:", err);
    res.status(500).json({ error: "Failed to update resume" });
  } finally {
    await fs.unlink(req.file.path).catch(() => {});
  }
};

module.exports = { uploadResume, editResume };
