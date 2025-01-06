'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add columns to the Events table
    await queryInterface.addColumn('Events', 'mentorId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.addColumn('Events', 'profileId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.addColumn('Events', 'creatorId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    // Remove columns from the Events table
    await queryInterface.removeColumn('Events', 'mentorId');
    await queryInterface.removeColumn('Events', 'profileId');
    await queryInterface.removeColumn('Events', 'creatorId');
  }
};
