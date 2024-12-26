'use strict';
module.exports = (sequelize, DataTypes) => {
  const Network = sequelize.define(
    'Network',
    {
      profileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Profiles', // Table name for Profile
          key: 'id',
        },
        onDelete: 'CASCADE', // Ensures cascading delete
        onUpdate: 'CASCADE',
      },
      connectionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Profiles', // Table name for Profile
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    {
      timestamps: true, // Adds createdAt and updatedAt timestamps
    }
  );

  // Associations
  Network.associate = function (models) {
    // Profile as the source of the connection
    Network.belongsTo(models.Profile, {
      foreignKey: 'profileId',
      as: 'profile', // Alias for source profile
    });

    // Profile as the target of the connection
    Network.belongsTo(models.Profile, {
      foreignKey: 'connectionId',
      as: 'connection', // Alias for connected profile
    });
  };

  return Network;
};
