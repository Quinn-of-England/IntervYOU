import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    content: {
        type: String, 
        required: true,
    },
})

const Comment = mongoose.model("Comment", CommentSchema)
export default Comment