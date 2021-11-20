import mongoose from "mongoose"

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String, 
        required: true,
    
    },
    follower_count: {
        type: Number,
        default: 0,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
})

const Group = mongoose.model("Group", GroupSchema)
export default Group