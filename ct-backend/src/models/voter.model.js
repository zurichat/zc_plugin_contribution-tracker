// Package Modules
const Joi = require("joi");

// Voter Schema
const voter_schema = Joi.object({

  //voter email
  email: Joi.string().required(),

  //voter user_name
  user_name: Joi.string().required(),

  //voter first_name
  first_name: Joi.string().allow(null),

  //voter last_name
  last_name: Joi.string().allow(null),

  voting_weight: Joi.number().precision(2).required(),

  //time created
  created_at: Joi.date().default(Date.now).allow(null),

  // updated at
  updated_at: Joi.date().allow(null),



});

module.exports = voter_schema;
