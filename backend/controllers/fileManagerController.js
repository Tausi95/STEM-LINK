const { FileManager } = require('../models');

// Function to handle file upload logic (after file is uploaded using Multer)
const handleFileUpload = async (fileData) => {
  try {
    const newFile = await FileManager.create(fileData);
    return newFile;
  } catch (error) {
    throw new Error('Error uploading file: ' + error.message);
  }
};

module.exports = { handleFileUpload };
