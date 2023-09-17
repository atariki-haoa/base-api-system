module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      actualCountry: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      eventType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adults: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      ageRange: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      artists: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      startDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      startHour: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endHour: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      region: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      commune: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      place: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      urlVideo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      conditionTerms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      img_url: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      img_public_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      producerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'producers',
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
    await queryInterface.dropTable('events');
  },
};
