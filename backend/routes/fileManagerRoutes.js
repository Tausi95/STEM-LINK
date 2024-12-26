const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { uploadFile } = require('../controllers/fileManagerController'); 
const { FileManager } = require('../models');

const router = express.Router();

// Constants for file management
const UPLOAD_DIR = './uploads/';
const ALLOWED_FILE_TYPES = [
  'image/jpeg', 'image/png', 'application/pdf',   // Allowed image and PDF types
  'video/mp4', 'video/mov', 'video/avi', 'video/mkv', // Allowed video types
]; 
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB size limit

// Ensure the uploads directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

// Set up multer for file storage with validation
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, UPLOAD_DIR); // Define file upload folder
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate unique file name
  }
});

// Multer file validation middleware
const fileFilter = (req, file, cb) => {
  if (!ALLOWED_FILE_TYPES.includes(file.mimetype)) {
    return cb(new Error('Invalid file type. Allowed types: JPEG, PNG, PDF, MP4, MOV, AVI, MKV.'));
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: fileFilter
});

// POST route to handle file upload
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded' });
    }

    const newFile = await FileManager.create({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      ownerId: req.body.ownerId, // This can be userId or eventId based on the context
      fileSize: req.file.size,
    });

    res.status(201).send({
      message: 'File uploaded successfully',
      file: newFile,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    if (error instanceof multer.MulterError) {
      // Handle Multer specific errors (e.g., file too large)
      return res.status(400).send({ message: 'Multer error: ' + error.message });
    }
    res.status(500).send({ message: 'Error uploading file', error: error.message });
  }
});

module.exports = router;
