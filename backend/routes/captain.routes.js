const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register', [

  body('email').isEmail(),

  body('fullname.firstname')
    .isLength({ min: 3 }),

  body('password')
    .isLength({ min: 6 }),

  body('vehicles.color')
    .isLength({ min: 3 }),

  body('vehicles.plate')
    .isLength({ min: 3 }),

  body('vehicles.capacity')
    .isNumeric(),

  body('vehicles.vehicleType')
    .isIn(['car', 'auto', 'motorcycle'])

], captainController.registerCaptain);



router.post('/login', [

  body('email').isEmail(),

  body('password').isLength({ min: 6 })

], captainController.loginCaptain);



router.get(
  '/profile',
  authMiddleware.authCaptain,
  captainController.getCaptainProfile
);



router.get(
  '/logout',
  authMiddleware.authCaptain,
  captainController.logoutCaptain
);


module.exports = router;