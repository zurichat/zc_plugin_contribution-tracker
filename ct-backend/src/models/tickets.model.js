// Package Modules
const Joi = require("joi");

// Game Schema
const ticket_schema = Joi.object({
  // ticket title
  title: Joi.string().required(),

  // Game Owner
  user_id: Joi.string().required(),

  //ticket description
  description: Joi.string().required(),

  //commit url
  commit_url: Joi.string().required(),

  //test url
  test_url: Joi.string().required(),

  // total positive votes
  total_upvotes: Joi.number().default(0),

  //total downvotes
  total_downvotes: Joi.number().default(0),

  //time created
  created_at: Joi.date().default(Date.now).allow(null),

  // ticket status
  status: Joi.number().default("Requested"), // Requested or Ongoing or Archived

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
