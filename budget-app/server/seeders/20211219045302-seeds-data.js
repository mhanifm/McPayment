'use strict';
const data = require('./data.json')
data.map(el => {
  el.createdAt = new Date()
  el.updatedAt = new Date()
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Balances', data, {})
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Balances', null, {})
  }
};
