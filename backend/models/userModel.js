'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // A user has one profile
      User.hasOne(models.Profile, {
        foreignKey: 'userId',
        as: 'profile',
      });

      // A user can create multiple events
      User.hasMany(models.Event, {
        foreignKey: 'creatorId',
        as: 'eventsCreated',
      });

      // A user can attend multiple events (many-to-many relationship)
      User.belongsToMany(models.Event, {
        through: 'UserEvents',
        foreignKey: 'userId',
        otherKey: 'eventId',
        as: 'eventsAttended',
      });

      // A user can manage multiple networks
      User.hasMany(models.Network, {
        foreignKey: 'ownerId',
        as: 'networks',
      });

      // Self-referencing many-to-many relationship for mentorships
      User.belongsToMany(models.User, {
        through: 'Mentorships',
        as: 'mentors',
        foreignKey: 'studentId',
        otherKey: 'mentorId',
      });

      User.belongsToMany(models.User, {
        through: 'Mentorships',
        as: 'students',
        foreignKey: 'mentorId',
        otherKey: 'studentId',
      });
    }

    // Instance method to compare passwords
    async isValidPassword(password) {
      return bcrypt.compare(password, this.password);
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 25],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6, 100],
        },
      },
      role: {
        type: DataTypes.ENUM('student', 'mentor', 'admin'),
        allowNull: false,
        defaultValue: 'student',
      },
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeSave: async (user) => {
          if (user.password) {
            user.password = await bcrypt.hash(user.password, 10);
          }
        },
      },
    }
  );

  return User;
};
