const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType
}) => {

  const captain = await captainModel.create({
    fullname: {
      firstname,
      lastname
    },
    email,
    password,
    vehicles: {
      color,
      plate,
      capacity,
      vehicleType
    }
  });

  return captain;
};