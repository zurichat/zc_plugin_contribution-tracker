import express from 'express';
import commentController from '../controllers/comment.controller'
const commentRouter = express.Router();

commentRouter.get('/:id/downvote', commentController.downvoteAComment)
commentRouter.get('/:id/upvote', commentController.upvoteAComment)
commentRouter.get('/:id', commentController.fetchOne)
commentRouter.get('/', commentController.fetchAll)
commentRouter.post('/', commentController.create)


export default commentRouter;
