const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.registerCaptain = async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicles } = req.body;

  const existingCaptain = await captainModel.findOne({ email });

  if (existingCaptain) {
    return res.status(400).json({ message: "Captain already exists" });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicles.color,
    plate: vehicles.plate,
    capacity: vehicles.capacity,
    vehicleType: vehicles.vehicleType
  });

  const token = captain.generateAuthToken();

  res.status(201).json({
    token,
    captain
  });
};



module.exports.loginCaptain = async (req, res) => {

  try {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.error("Validation error:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel
      .findOne({ email })
      .select("+password");

    if (!captain) {
      console.error("Login failed: captain not found for email:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
      console.error("Login failed: password mismatch for email:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = captain.generateAuthToken();

    res.cookie("token", token);

    res.status(200).json({
      token,
      captain
    });

  } catch (error) {

    console.error("Login server error:", error);

    res.status(500).json({
      message: "Internal server error"
    });

  }
};



module.exports.getCaptainProfile = async (req, res) => {
  res.status(200).json(req.captain);
};



module.exports.logoutCaptain = async (req, res) => {

  const token =
    req.cookies.token ||
    req.headers.authorization?.split(" ")[1];

  if (token) {
    await blacklistTokenModel.create({ token });
  }

  res.clearCookie("token");

  res.status(200).json({
    message: "Logged out successfully"
  });
};