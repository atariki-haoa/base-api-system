module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('roles', [
    {
      name: 'productora',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'cliente',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'administrador',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('roles', null, {}),
};
