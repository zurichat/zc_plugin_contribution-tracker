import express from 'express';
import commentController from '../controllers/comment.controller'
const commentRouter = express.Router();

commentRouter.get('/:id/downvote', commentController.downvoteAComment)
commentRouter.get('/:id/upvote', commentController.upvoteAComment)
commentRouter.get('/:id', commentController.findById)
commentRouter.get('/', commentController.findAll)
commentRouter.post('/', commentController.create)


export default commentRouter;
