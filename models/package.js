module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define(
    'Package',
    {
      name: DataTypes.STRING,
    },
  );
  return Package;
};
