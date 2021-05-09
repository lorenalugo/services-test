module.exports = (sequelize, DataTypes) => {
  const Passenger = sequelize.define(
    'Passenger',
    {
      names: DataTypes.STRING,
      lastNames: DataTypes.STRING,
      flightNumber: DataTypes.STRING,
    },
  );
  Passenger.associate = function associate(models) {
    // associations can be defined here
    Passenger.hasMany(models.PassengerPackage, {
      foreignKey: 'passengerId',
      target: 'id',
      as: 'packages',
    });
  };
  return Passenger;
};
