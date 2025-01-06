'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // An event belongs to a mentor
      Event.belongsTo(models.Mentor, {
        foreignKey: 'mentorId',
        as: 'mentor',
        onDelete: 'CASCADE', // If a mentor is deleted, related events are also deleted
        onUpdate: 'CASCADE',
      });

      // An event may belong to a profile (optional)
      Event.belongsTo(models.Profile, {
        foreignKey: 'profileId',
        as: 'profile',
        onDelete: 'SET NULL', // If a profile is deleted, set profileId to null
        onUpdate: 'CASCADE',
      });

      // An event may have a creator
      Event.belongsTo(models.User, {
        foreignKey: 'creatorId',
        as: 'creator',
        onDelete: 'SET NULL', // If a user is deleted, set creatorId to null
        onUpdate: 'CASCADE',
      });
    }
  }

  Event.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false, //  event title is not null
        validate: {
          notEmpty: true, // the title is not an empty string
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true, // the date is in a valid date format
          isAfter: new Date().toISOString(), // Ensure the date is in the future
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true, // Description is optional
      },
      type: {
        type: DataTypes.ENUM('workshop', 'seminar', 'webinar', 'conference'), // Enum for event types
        allowNull: false, // 
        validate: {
          isIn: [['workshop', 'seminar', 'webinar', 'conference']], // type is within the specified enum
        },
      },
      mentorId: {
        type: DataTypes.INTEGER,
        allowNull: true, // an event with a mentor
        references: {
          model: 'Mentors', // Reference the Mentors table
          key: 'id',
        },
      },
      profileId: {
        type: DataTypes.INTEGER,
        allowNull: true, // associate an event with a profile
        references: {
          model: 'Profiles', // Reference the Profiles table
          key: 'id',
        },
      },
      creatorId: {
        type: DataTypes.INTEGER,
        allowNull: true, // an event with a creator (User)
        references: {
          model: 'Users', // Reference the Users table
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'Events', //
      timestamps: true, // Enable createdAt and updatedAt timestamps
    }
  );

  return Event;
};
