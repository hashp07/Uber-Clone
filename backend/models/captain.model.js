const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({

  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, 'First name must be at least 3 characters long']
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, 'Last name must be at least 3 characters long']
    }
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Invalid email format']
  },

  password: {
    type: String,
    required: true,
    select: false
  },

  socketId: {
    type: String
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive"
  },

  vehicles: {
    color: {
      type: String,
      required: true
    },
    plate: {
      type: String,
      required: true
    },
    capacity: {
      type: Number,
      required: true
    },
    vehicleType: {
      type: String,
      enum: ['car', 'auto', 'motorcycle'],
      required: true
    }
  }

});


captainSchema.statics.hashPassword = async function(password) {
  return await bcrypt.hash(password, 10);
};


captainSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};


captainSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};

module.exports = mongoose.model("Captain", captainSchema);