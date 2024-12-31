require('dotenv').config();
const { Sequelize } = require('sequelize');

// Validate required environment variables
if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_HOST || !process.env.DB_DIALECT) {
  console.error('One or more required environment variables are missing. Please check your .env file.');
  process.exit(1);
}

// Initialize Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,
  }
);

// Function to connect to the database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    process.exit(1);
  }
};

// Optionally sync models (for development only)
const syncModels = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Models synchronized with the database.');
  } catch (error) {
    console.error('Error synchronizing models:', error.message);
  }
};

module.exports = { connectDB, syncModels, sequelize };

