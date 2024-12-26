'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    'Profile',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true, // Optional field
      },
      fieldOfInterest: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('student', 'mentor', 'event_creator'),
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Table name for User
          key: 'id',
        },
        onDelete: 'CASCADE', // Ensures profile is removed when the user is deleted
        onUpdate: 'CASCADE',
      },
    },
    {
      timestamps: true, // Adds createdAt and updatedAt timestamps
    }
  );

  // Associations
  Profile.associate = function (models) {
    // Profile belongs to a User
    Profile.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      onDelete: 'CASCADE',
    });

    // Profile can have many connections (networking feature)
    Profile.belongsToMany(models.Profile, {
      through: 'Network', // Join table for networking connections
      as: 'connections',
      foreignKey: 'profileId',
      otherKey: 'connectionId',
    });
  };

  return Profile;
};
