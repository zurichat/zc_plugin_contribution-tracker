/* eslint-disable */
import ZuriDatabase from "../zuricore/db";
import Response from "../utils/response";

const Ticket = new ZuriDatabase("Tickets");

const ticketController = {
  create: async (req, res, next) => {
    const {} = req.body;

    try {
      const savedRecord = await Ticket.create({
        //payload goes in here
      });
      return Response.send(
        res,
        201,
        savedRecord,
        "Ticket created successfully"
      );
    } catch (error) {
      return next(error);
    }
  },
  fetchAll: async (req, res, next) => {
    try {
      let data = await Ticket.fetchAll();

      return Response.send(
        res,
        200,
        data,
        "Tickets retrieved successfully",
        true
      );
    } catch (err) {
      return next(err);
    }
  },
  fetchOne: async (req, res, next) => {
    const { id } = req.body;
    const { org } = req.query;

    try {
      const data = await Ticket.fetchOne(id, org);
      return Response.send(
        res,
        200,
        data,
        "Ticket retrieved successfully",
        true
      );
    } catch (err) {
      return next(err);
    }
  },

  doUpvote: async (req, res, next) => {
    // get id and payload from the frontend, id is the id of the current ticket, the payload will be an object containing the  vote weight user that's voting + the current value of the ticket's upvotes of the  like: payload:{total_upvotes: voter.voter_weight + ticket.total_upvotes}
    const { id, payload } = req.body;
    // get org id from the query
    const { org } = req.query;

    try {
      // update ticket
      const data = await Ticket.update(id, payload, org);
      // return data
      return Response.send(res, 200, data, "Upvote successful");
    } catch (err) {
      return next(err);
    }
  },
  doDownvote: async (req, res, next) => {
    // get id and payload from the frontend, id is the id of the current ticket, the payload will be an object containing the  vote weight of user that's voting + the current value of the ticket's downvotes like: payload:{total_downvotes: voter.voter_weight + ticket.total_downvotes}
    const { id, payload } = req.body;
    // get org id from the query
    const { org } = req.query;

    try {
      // update ticket
      const data = await Ticket.update(id, payload, org);
      // return data
      return Response.send(res, 200, data, "Downvote successful");
    } catch (err) {
      return next(err);
    }
  },
  updateStatus: async (req, res, next) => {
    // get id and payload from the frontend, id is the id of the current ticket, the payload will be like: payload:{status: the selected status: Requested or Ongoing or Archived}
    const { id, payload } = req.body;
    // get org id from the query
    const { org } = req.query;
    try {
      // update ticket
      const data = await Ticket.update(id, payload, org);
      // return data
      return Response.send(res, 200, data, "Ticket archived  successfully");
    } catch (err) {
      return next(err);
    }
  },
  updateTestUrl: async (req, res, next) => {
    // get id and payload from the frontend, id is the id of the current ticket, the payload will be like: payload:{test_url: the new input url}
    const { id, payload } = req.body;
    // get org id from the query
    const { org } = req.query;
    try {
      // update ticket
      const data = await Ticket.update(id, payload, org);
      // return data
      return Response.send(
        res,
        200,
        data,
        "Ticket test url updated  successfully"
      );
    } catch (err) {
      return next(err);
    }
  },
};

export default ticketController;
