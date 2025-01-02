// Fixed userModel.js
'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/db');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Profile, { foreignKey: 'userId', as: 'profile' });
      User.hasMany(models.Event, { foreignKey: 'creatorId', as: 'eventsCreated' });
      User.belongsToMany(models.Event, {
        through: 'UserEvents',
        foreignKey: 'userId',
        otherKey: 'eventId',
        as: 'eventsAttended',
      });
      User.hasMany(models.Network, { foreignKey: 'ownerId', as: 'networks' });
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
      defaultScope: {
        attributes: { exclude: ['password'] },
      },
      scopes: {
        withPassword: { attributes: {} },
      },
      hooks: {
        beforeSave: async (user) => {
          if (user.changed('password')) {
            user.password = await bcrypt.hash(user.password, 10);
          }
        },
      },
    }
  );

  return User;
};
