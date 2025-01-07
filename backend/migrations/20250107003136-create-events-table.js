'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create Events table
    await queryInterface.createTable('Events', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      mentorId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      profileId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      creatorId: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Drop Events table
    await queryInterface.dropTable('Events');
  }
};
