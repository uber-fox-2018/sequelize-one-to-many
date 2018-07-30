'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addConstraint('Teachers', ['email'], {
    type: 'unique',
    name: 'custom_unique_constraint_name'
  });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Teachers', ['email'], {
      
    });
    
  }
};
