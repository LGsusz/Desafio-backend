
'use strict'
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Luffy',
        email: 'luffy@lanscape.cl',
        password: await bcrypt.hash('luffy123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Zoro',
        email: 'zoro@lanscape.cl',
        password: await bcrypt.hash('zoro321', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Sanji',
        email: 'sanji@lanscape.cl',
        password: await bcrypt.hash('sanji555', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuarios', null, {})
  }
}
