//NOTE!! A new ticket collection(title, user_id, description, commit_url, test_url, created_at  is not expected from the frontend, instead you set this to help with counting down the voting period, status: is defaulted to ongoing, upvote and downvote both defaulted to 0 and also not expected from frontend on creation of collection but only meant to UPDATE the collection as voting begins) is CREATED when the person approved to work on it submits his completed ticket where a timer starts to countdown(initial status set to ongoing. i.e., this ticket is being voted on) and only voters(verify valid voter before updating the upvote and downvote), once created_at minus updated_at is greater than timing, the ticket becomes archived (status gets set to archived. i.e., voting for this ticket has ended) and tickets can no longer be updated so on every update, if the created _at minus updated_at is greater than countdown time, then status gets updated instead to archived and you return a warning that time has elapsed. So for update task, you do four things, you verify that the voter is a user in the org and that he's a valid voter, then verify the timer, if elapsed update the status, else update with vote which is one of upvote or downvote
// Package Modules
import Joi from 'joi'

// Ticket Schema
const ticket_schema = Joi.object({
  // ticket title
  title: Joi.string().trim().required().label('title'),

  // Ticket Owner
  owner_id: Joi.string().trim().required().label('owner_id'),

  //ticket description
  description: Joi.string().trim().required().label('description'),

  //commit url
  commit_url: Joi.string().trim().uri().label('commit_url'),

  //test url
  test_url: Joi.string().trim().uri().label('test_url'),
  status: Joi.string().trim().default('ongoing').valid('ongoing', 'archived').label('status'), // requested/created = 0,  completed = 1, archived = 2

  //vote count
  total_upvotes: Joi.number().default(0).label('total_upvotes'),
  total_downvotes: Joi.number().default(0).label('total_downvotes'),

  //time created
  created_at: Joi.date().default(Date.now).label('created_at'),
  updated_at: Joi.date().allow(null).label('updated_at'),
});

export default ticket_schema

