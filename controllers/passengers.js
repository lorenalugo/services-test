const models = require('../models');

exports.getPassengers = async (req, res, next) => {
  try {
    const passengers = await models.Passenger.findAll();
    return res.status(200).json({
      success: true,
      result: {
        passengers,
      },
    });
  } catch (e) {
    return next(e);
  }
};

exports.getPassengerPackages = async (req, res, next) => {
  const { passengerId } = req.query;
  try {
    const packages = await models.PassengerPackage.findOne({
      include: [
        { association: 'type' },
      ],
      where: { passengerId },
    });
    return res.status(200).json({
      success: true,
      result: {
        packages,
      },
    });
  } catch (e) {
    return next(e);
  }
};

exports.createPassenger = async (req, res, next) => {
  const {
    names, lastnames, flightNumber, packages,
  } = req.body;
  try {
    if (packages && packages.length <= 3) {
      const passenger = await models.Passenger.create({ names, lastnames, flightNumber });
      const formattedPackages = packages.map(Package => ({
        ...Package,
        passengerId: passenger.id,
        status: 'ingresado',
      }));
      await models.PassengerPackage.bulkCreate(formattedPackages);
      return res.status(200).json({
        success: true,
      });
    }
    throw Error('Excedió la cantidad de equipaje, debe ser máximo 3');
  } catch (e) {
    return next(e);
  }
};

exports.updatePassengerPackage = async (req, res, next) => {
  const { passengerId } = req.query;
  try {
    const validatePassenger = await models.Passenger.findOne({ where: { id: passengerId } });
    if (!validatePassenger) {
      throw Error('Pasajero no encontrado');
    }
    await models.PassengerPackage.bulkUpdate({
      status: 'retirado',
      where: { passengerId },
    });
    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    return next(e);
  }
};
