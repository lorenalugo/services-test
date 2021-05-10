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
  down: queryInterface => queryInterface.dropTable('Passengers'),
};
