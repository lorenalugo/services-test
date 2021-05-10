module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('PassengerPackages', 'status', {
    type: Sequelize.STRING,
  }),
  down: queryInterface => queryInterface.removeColumn('PassengerPackages', 'status'),
};
