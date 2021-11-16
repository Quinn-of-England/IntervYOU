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
        const user = await User.findById(req.body.userId)
        await Comment.create({ user: user.username, content: req.body.content }).then(async (result) => {
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