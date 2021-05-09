module.exports = (sequelize, DataTypes) => {
  const PassengerPackage = sequelize.define(
    'PassengerPackage',
    {
      qty: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
  );
  PassengerPackage.associate = function associate(models) {
    // associations can be defined here
    PassengerPackage.belongsTo(models.Package, {
      foreignKey: 'typeId',
      target: 'id',
      as: 'type',
    });
    PassengerPackage.belongsTo(models.Passenger, {
      foreignKey: 'passengerId',
      target: 'id',
      as: 'passenger',
    });
  };
  return PassengerPackage;
};
