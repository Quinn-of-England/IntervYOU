import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    content: {
        type: String, 
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    post: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Post'
    },
})

const Comment = mongoose.model("Comment", CommentSchema)
export default Comment