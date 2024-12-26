'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    static associate(models) {
      // A mentor can have many events
      Mentor.hasMany(models.Event, {
        foreignKey: 'mentorId',
        as: 'events',
      });

      // Adding association to User model (if mentors are linked to users)
      Mentor.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });

      // Adding association to Profile model (if mentor has a profile)
      Mentor.belongsTo(models.Profile, {
        foreignKey: 'profileId',
        as: 'profile',
      });
    }
  }

  Mentor.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      field: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      experience: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      userId: { // Link to User model
        type: DataTypes.INTEGER,
        allowNull: true, // If a mentor is always linked to a user, change this to false
      },
      profileId: { // Link to Profile model (if applicable)
        type: DataTypes.INTEGER,
        allowNull: true, // This can be true or false depending on your use case
      },
    },
    {
      sequelize,
      modelName: 'Mentor',
    }
  );

  return Mentor;
};
