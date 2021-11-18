import mongoose from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

const CommentSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    content: {
        type: String, 
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Post'
    },
})

CommentSchema.plugin(mongoosePaginate)
const Comment = mongoose.model("Comment", CommentSchema)
export default Comment
