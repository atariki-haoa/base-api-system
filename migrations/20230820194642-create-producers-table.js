module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('producers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fantasyName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      businessName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      organizationEmail: {
        type: Sequelize.STRING,
      },
      organizationPhone: {
        type: Sequelize.STRING,
      },
      commercialAddress: {
        type: Sequelize.STRING,
      },
      rut: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      commercialActivity: {
        type: Sequelize.STRING,
      },
      region: {
        type: Sequelize.STRING,
      },
      userType: {
        type: Sequelize.STRING,
      },
      commune: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('producers');
  },
};
