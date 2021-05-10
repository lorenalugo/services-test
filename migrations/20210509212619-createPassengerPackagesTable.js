module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PassengerPackages', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    passengerId: {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'Passengers',
        },
        key: 'id',
      },
      allowNull: false,
    },
    typeId: {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'Packages',
        },
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  }),
  down: queryInterface => queryInterface.dropTable('PassengerPackages'),
};
