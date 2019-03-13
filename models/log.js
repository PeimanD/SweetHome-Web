const Joi = require('joi');
const mongoose = require('mongoose');
const dayInfo = new Schema({
  externalTemp: Number,
  internalTemp: Number,
  energyUsage: Number,
  savings: Number,
  thermostatMode: Number
});
const log = mongoose.model('log', new mongoose.Schema({
  userID:{
    type: ObjectId,
    required: true
  },
  thermostatId: {
    type: String
  },
  monthInfo: {
    // *********How to make it an array?*********
    type: dayInfo
  }
}));

function validateLog(log) {
  const schema = {
    userId: Joi.string().required(),
    thermostatId: Joi.string().required(),
    monthInfo: Joi.dayInfo()
  };

  return Joi.validate(log, schema);
}

exports.log = log;
exports.validate = validateLog;