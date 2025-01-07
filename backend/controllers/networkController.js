const { Network } = require('../models');

// Helper function to validate connection data
const validateConnectionData = (data) => {
  const { userId, connectionId } = data;
  if (!userId || !connectionId) {
    throw new Error('User ID and connection ID are required.');
  }
  // Optionally, add more validation logic, like checking if the IDs exist in the database
};

const getConnections = async (req, res) => {
  try {
    const connections = await Network.findAll();
    if (!connections || connections.length === 0) {
      return res.status(404).json({ message: 'No connections found.' });
    }
    res.status(200).json(connections);
  } catch (error) {
    console.error('Error fetching connections:', error); // Log for debugging
    res.status(500).json({ message: 'An error occurred while fetching connections.' });
  }
};

const addConnection = async (req, res) => {
  try {
    const connectionData = req.body;

    // Validate connection data before proceeding
    validateConnectionData(connectionData);

    // Check if the connection already exists
    const existingConnection = await Network.findOne({
      where: {
        userId: connectionData.userId,
        connectionId: connectionData.connectionId,
      },
    });

    if (existingConnection) {
      return res.status(400).json({ message: 'Network already exists.' });
    }

    // Create the new connection
    const newConnection = await Network.create(connectionData);
    res.status(201).json({
      message: 'Network added successfully.',
      connection: newConnection, // Optional: Return the created connection data
    });
  } catch (error) {
    console.error('Error adding connection:', error); // Log for debugging
    if (error.message) {
      return res.status(400).json({ message: error.message }); // Handle validation error
    }
    res.status(500).json({ message: 'An error occurred while adding the connection.' });
  }
};

module.exports = {
  getConnections,
  addConnection,
};
