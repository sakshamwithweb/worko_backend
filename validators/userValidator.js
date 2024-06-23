const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().integer().min(0).required(),
  city: Joi.string().required(),
  zipCode: Joi.string().regex(/^\d{5}$/).required(),
});

const validateUser = (user) => {
  return userSchema.validate(user);
};

const validateId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

module.exports = { validateUser, validateId };
