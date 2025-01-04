'use strict';

module.exports = (sequelize, DataTypes) => {
  const FileManager = sequelize.define('FileManager', {
    fileName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fileType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fileSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  });

  // Add associations 
  FileManager.associate = function(models) {
    FileManager.belongsTo(models.User, {
      foreignKey: 'ownerId',
      as: 'owner', // This alias can be used for querying related files
      onDelete: 'CASCADE', // If the user is deleted, so are their files
    });
    // if it belongs to an event:
       FileManager.belongsTo(models.Event, {
         foreignKey: 'ownerId',
         as: 'event',
         onDelete: 'CASCADE',
       });
  };

  return FileManager;
};
