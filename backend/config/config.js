require('dotenv').config(); // Ensure this is at the top to load .env variables

module.exports = {
  development: {
    username: process.env.DB_USER || 'root', // Default to 'root' if not provided
    password: process.env.DB_PASS || null, // Default to null if not provided
    database: process.env.DB_NAME || 'dev_db', // Use a default database name
    host: process.env.DB_HOST || '127.0.0.1', // Default to localhost
    dialect: process.env.DB_DIALECT || 'mysql', // Default to MySQL
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql',
  },
};
