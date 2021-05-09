module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'Packages',
    [
      { name: 'Grande' },
      { name: 'Pequeño' },
      { name: 'Prenda' },
    ],
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('Packages', null, {}),
};
