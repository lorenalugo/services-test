module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Passengers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    names: {
      type: Sequelize.STRING,
    },
    lastNames: {
      type: Sequelize.STRING,
    },
    flightNumber: {
      type: Sequelize.STRING,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Passengers'),
};
