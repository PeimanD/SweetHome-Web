const Joi = require('joi');
const mongoose = require('mongoose');

const daySchedule = new Schema({
  array: [],
  ofBoolean: [Boolean]
});
const weekSchedule = new Schema({
    monday:{
      type: daySchedule,
    },
    tuesday:{
      type: daySchedule,
    },
    wednesday:{
      type: daySchedule,
    },
    thursday:{
      type: daySchedule,
    },
    friday:{
      type: daySchedule,
    },
    saturday:{
      type: daySchedule,
    },
    sunday:{
      type: daySchedule,
    }
});

const thermostat = mongoose.model('thermostat', new mongoose.Schema({
  userId:{
    type: ObjectId,
    required: true
  },
  thermostatId:{
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  room:{
    type: String,
    required: true,
    lowercase: true,
    minlength: 1,
    maxlength: 20
  },
  status:{
    type: Boolean,
    default: false
  },
  mode:{
    type: Number,
    minlength: 1,
    maxlength: 3
  },
  setTemp:{
    type: Number,
    required: true
  }
  schedule:{
    type: weekSchedule
  }
}));

function validateThermostat(thermostat) {
  const schema = {
    userId: Joi.string(),
    thermostatId: Joi.string().required(),
    room: Joi.string().required(),
    status: Joi.boolean(),
    mode: Joi.number(),
    setTemp: Joi.number(),
    schedule: Joi.weekSchedule()
  };

  return Joi.validate(thermostat, schema);
}

exports.thermostat = thermostat;
exports.validate = validateThermostat;