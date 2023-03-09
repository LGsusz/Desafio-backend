'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permisos', [
      {
        UsuarioId: 3,
        permiso: 'VISUALIZACION_DASHBOARDS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UsuarioId: 3,
        permiso: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UsuarioId: 1,
        permiso: 'AUDITORIA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UsuarioId: 2,
        permiso: 'VISUALIZACION_DASHBOARDS',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Permisos', null, {})
  }
}
