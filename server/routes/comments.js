import { Router } from 'express'
import * as commentController from '../controllers/comments.js'

const commentRouter = Router()

commentRouter.post("/create", commentController.create_comment)

export default commentRouter