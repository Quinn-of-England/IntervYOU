import Comment  from "../models/Comment.js"
import User from "../models/User.js"
import Post from "../models/Post.js"

/**
 * * This function will handle comment creation
 * * Will assign user of comment using user id
 * * Will send 201(Create) if comment created
 * * Request must be formatted like bellow
 * body: {
 *  userId: id of user
 *  postId: id of post
 *  content: content of the comment
 * }
 */
export const create_comment = async (req, res) => {
    try{
        await Comment.create({ user: req.body.userId, content: req.body.content, post: req.body.postId }).then(async (result) => {
            await Post.findByIdAndUpdate(
                req.body.postId,
                { $push: { comments: { _id: result._id } } },
            )
            res.status(201).json({
                message: "Comment created!",
                comment: result,
            })
        }).catch((err) => {
            res.status(400).json({
                message: "Failed to create comment",
                error: err.message
            })
        })
    }catch(err){
        res.status(500).json({
            message: "Server error in create_comment",
            error: err.message
        })
    }
}

/**
 * * This function will get all the comments from the database
 * * A 200(Ok) will be sent after success 
 * TODO: Check Whether User Has to Access All Comments
 */
export const get_all_comments = async (_, res) => {
    try {
        const comments = await Comment.find()
        res.status(200).json(comments)
    } catch (err) {
        res.status(500).json({
            message: "Server error in get_all_comments",
            error: err.message
        })
    }
}

/**
 * * This function will fetch all comments from a user
 * * Will return a 200(Ok) with all the comments
 * * Will return a 400(Bad request) if no comments with that user exist
 * Query parameters:
 *  userId
 */
export const get_comments_by_user = async (req, res) => {
    try {
        const comments = await Comment.find({ user: req.query.userId })
        if(comments){
            res.status(200).json(comments)
        }else {
            res.status(400).json({
                message: `Cant find comments with userId ${req.query.userId}`,
            })
        }
    }catch(err){
        res.status(500).json({
            message: "Server error in get_comments_by_user",
            error: err.message
        })
    }
}

/**
 * * This function will fetch all comments from a post
 * * Will return a 200(Ok) with all the comments
 * * Will return a 400(Bad request) if no comments with that post exist
 * Query parameters:
 *  postId
 */
 export const get_comments_by_post = async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.query.postId })
        if(comments){
            res.status(200).json(comments)
        }else {
            res.status(400).json({
                message: `Cant find comments with userId ${req.query.postId}`,
            })
        }
    }catch(err){
        res.status(500).json({
            message: "Server error in get_comments_by_post",
            error: err.message
        })
    }
}

/**
 * * This function will update the comment
 * * Will return a 200(Ok) if updated
 * * Will return a 400(Bad request) if could not update
 * body {
 *  content: new comment content
 * }
 * Path parameters:
 *  id: comment id
 */
export const update_comment = (req, res) => {
    try {
        Comment.findByIdAndUpdate(req.params.id, { content: req.body.content, date: Date.now() }, { new: true }, (err, result) => {
            if(err){
                res.status(400).json({
                    message: "Could not update comment",
                    error: err.message
                })
            }else{
                res.status(200).json({ 
                    message: "Comment updated!",
                    comment: result
                })
            }
        })
    } catch (err) {
        res.status(500).json({
            message: "Server error in update_comment",
            error: err.message
        })
    }
}

export const delete_comment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id)
        if(comment){
            res.status(200).json({ message: `Comment ${comment._id} deleted!`})
        } else {
            res.status(400).json({ message: `Not deleting comment ${req.params.id} since id does not exist!`})
        }
    } catch (err) {
        res.status(500).json({
            message: `Server error while deleting comment with id`,
            error: err.message
          })
    }
}