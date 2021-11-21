import { Router } from 'express'
import * as commentController from '../controllers/comments.js'

const commentRouter = Router()

//Create - Create comment
commentRouter.post("/create", commentController.create_comment)

//Read - Get all comments
commentRouter.get("/", commentController.get_all_comments)

//Read - Get all comments by userId
commentRouter.get("/user/", commentController.get_comments_by_user)

//Read - Get all comments by postId
commentRouter.get("/post/", commentController.get_comments_by_post)

//Update - Update comment
commentRouter.patch("/:id", commentController.update_comment)

//Delete - Delete comment
commentRouter.delete("/:id", commentController.deleteComment)

export default commentRouter
