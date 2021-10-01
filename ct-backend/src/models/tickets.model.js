// Package Modules
const Joi = require("joi");

// Game Schema
const ticket_schema = Joi.object({
  // ticket title
  name: Joi.string().required(),

  // Game Owner
  owner: Joi.object({
    user_id: Joi.string().required(),
    user_name: Joi.string().required(),
    image_url: Joi.string(),
  }).required(),

  //ticket description
  description: Joi.string().required(),

  //commit url
  commit_url: Joi.string().required(),

  //test url
  test_url: Joi.string().required(),

  // ticket status
  status: Joi.number().required(), // requested/created = 0, running/ongoing = 1, completed = 2

  //time created
  created_at: Joi.date().default(Date.now).allow(null),

  // messages
  messages: Joi.array()
    .items(
      Joi.object({
        user_name: Joi.string().required(),
        text: Joi.string().required(),
        image_url: Joi.string(),
      })
    )
    .allow(null),

  // game spectators
  reactions: Joi.array()
    .items(
      Joi.object({
        user_id: Joi.string().required(),
        user_name: Joi.string().required(),
        emoji: Joi.string(),
      })
    )
    .allow(null),
});

module.exports = ticket_schema;
