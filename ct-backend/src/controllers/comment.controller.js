/* eslint-disable */
import ZuriDb from '../zuricore/db';
import Response from '../utils/response'
import comment_schema from '../models/comment.model'
import CustomError from '../utils/custom-error';

const Comment = new ZuriDb('ct_comments');
const Voter = new ZuriDb("ct_voters");

const commentController = {
  create: async (req, res, next) => {
    try {
      //   comment,
      //   feature_id,
      //   owner: { name, user_id, image_url },
      //   created_at,
      //   updated_at,
      //   up_votes: [{ user_name, voting_weight }],
      //   down_votes: [{ user_name, voting_weight }],
      const { comment, feature_id, owner } = req.body;
      const { org_id } = req.query;
      // const owner = {
      //   user_id: req.user.id,
      //   user_name: req.user.display_name,
      //   image_url: req.user.image_url
      // };

      const commentData = await comment_schema.validateAsync({ comment, feature_id, owner, up_votes: [], down_votes: [] });

      const dbResponse = await Comment.create(commentData, org_id)

      return Response.send(
        res,
        201,
        dbResponse,
        'Comment created successfully'
      )

    } catch (error) {
      return next(error)
    }
  },
  findById: async (req, res, next) => {
    const { id } = req.params;
    const { org_id } = req.query;

    try {
      const data = await Comment.findById(id, org_id)
      return Response.send(
        res,
        200,
        data,
        'Comment retrived successfully'
      )
    } catch (err) {
      return next(err)
    }
  },
  findAll: async (req, res, next) => {
    try {
      const { org_id } = req.query
      let data = await Comment.findAll(org_id)

      return Response.send(
        res,
        200,
        data,
        'Comments retrieved successfully',
        true
      )
    } catch (err) {
      return next(err)
    }
  },
  upvoteAComment: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { org_id, voter_id } = req.query;
      //   comment,
      //   feature_id,
      //   owner: { name, user_id, image_url },
      //   created_at,
      //   updated_at,
      //   up_votes: [{ user_name, voting_weight }],
      //   down_votes: [{ user_name, voting_weight }],

      // validate the voter
      // if (!req.user.ct_voter) throw new CustomError('This is not a valid voter', 401); 
      const voterResponse = await Voter.findByParameter(voter_id, org_id);
      const voter = voterResponse.data;
      if (!voter) return Response.send(
        res,
        422,
        {},
        "Invalid voter_id passed. Pass a valid voter_id as a query params.",
        false
      )

      // retrieve the comment
      const commentResponse = await Comment.findById(id, org_id);
      const savedComment = commentResponse.data;
      if (!savedComment) throw new CustomError('Comment not found.', 404);

      // add only if the user has voted before
      if (!savedComment.up_votes.some(vote => vote.user_name == voter.user_name)) {
        savedComment.updated_at = Date.now();
        savedComment.up_votes.push({
          user_name: voter.user_name,
          voting_weight: voter.voting_weight
        })
      }

      // Save the comment payload
      delete savedComment._id; // remove the _id field. It throws error on zuri core api
      const dbResponse = await Comment.update(id, savedComment, org_id);
      return Response.send(
        res,
        200,
        dbResponse,
        "Voted successfully"
      )

    } catch (error) {
      return next(error)
    }
  },
  downvoteAComment: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { org_id, voter_id } = req.query;
      //   comment,
      //   feature_id,
      //   owner: { name, user_id, image_url },
      //   created_at,
      //   updated_at,
      //   up_votes: [{ user_name, voting_weight }],
      //   down_votes: [{ user_name, voting_weight }],

      // validate the voter
      // if (!req.user.ct_voter) throw new CustomError('This is not a valid voter', 401); 
      const voterResponse = await Voter.findById(voter_id, org_id);
      const voter = voterResponse.data;
      if (!voter) return Response.send(
        res,
        422,
        {},
        "Invalid voter_id passed. Pass a valid voter_id as a query params.",
        false
      )

      // retrieve the comment
      const commentResponse = await Comment.findById(id, org_id);
      const savedComment = commentResponse.data;
      if (!savedComment) throw new CustomError('Comment not found.', 404);

      // add only if the user has voted before
      if (!savedComment.down_votes.some(vote => vote.user_name == voter.user_name)) {
        savedComment.updated_at = Date.now();
        savedComment.down_votes.push({
          user_name: voter.user_name,
          voting_weight: voter.voting_weight
        })
      }

      // Save the comment payload
      delete savedComment._id; // remove the _id field. It throws error on zuri core api
      const dbResponse = await Comment.update(id, savedComment, org_id);
      return Response.send(
        res,
        200,
        dbResponse,
        "Voted successfully"
      )

    } catch (error) {
      return next(error)
    }
  }
}


export default commentController;
