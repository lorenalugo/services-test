const express = require('express');

const router = express.Router();
const {
  getPassengers, getPassengerPackages, createPassenger, updatePassengerPackage,
} = require('../controllers/passengers');

router.get('/passengers', getPassengers);
router.get('/passengers/:passengerId', getPassengerPackages);
router.post('/passengers', createPassenger);
router.put('/passengers/:passengerId', updatePassengerPackage);

module.exports = router;
