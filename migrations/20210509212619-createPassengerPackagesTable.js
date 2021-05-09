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
  }),
  down: queryInterface => queryInterface.dropTable('PassengerPackages'),
};
