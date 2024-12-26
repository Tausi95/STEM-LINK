'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // An event belongs to a mentor
      Event.belongsTo(models.Mentor, {
        foreignKey: 'mentorId',
        as: 'mentor',
      });

      // An event may belong to a profile (optional)
      Event.belongsTo(models.Profile, {
        foreignKey: 'profileId',
        as: 'profile',
      });
    }
  }

  Event.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false, // Ensure the event title is not null
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false, // Ensure the event date is not null
        validate: {
          isDate: true, // Ensure the date is in a valid date format
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true, // Description is optional
      },
      type: {
        type: DataTypes.ENUM('workshop', 'seminar', 'webinar', 'conference'), // Enum for event types
        allowNull: false, // Ensure the event type is not null
      },
      mentorId: {
        type: DataTypes.INTEGER,
        allowNull: true, // Optionally associate an event with a mentor
      },
      profileId: {
        type: DataTypes.INTEGER,
        allowNull: true, // Optionally associate an event with a profile (optional)
      },
    },
    {
      sequelize,
      modelName: 'Event',
    }
  );

  return Event;
};
