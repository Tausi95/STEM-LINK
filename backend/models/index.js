'use strict';

// Required modules
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize'); // Sequelize library for database interactions

const basename = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';

// Load the configuration for the database based on the environment
const config = require(path.resolve(__dirname, '../config/config.js'))[env];

// Initialize an empty object to store models
const db = {};

let sequelize;

// If a connection string environment variable is provided, use it; otherwise, use the provided config options
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Read all files in the current directory, excluding the current file (index.js) and non-JS files
fs
  .readdirSync(__dirname)
  .filter(file => {
    // Filters out hidden files, index.js, and non-JS files
    return (
      file.indexOf('.') !== 0 &&
      file !== basename && // Exclude index.js
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    // Dynamically import and initialize the model file, passing Sequelize instance and DataTypes
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model; // Add the model to the `db` object, using model name as key
  });

// Set up associations (if any) for each model
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db); // Call associate function if defined in the model
  }
});

// Add the sequelize instance and Sequelize class to `db` object for easy access throughout the app
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;

