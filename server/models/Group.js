import mongoose from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

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
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

GroupSchema.plugin(mongoosePaginate)
const Group = mongoose.model("Group", GroupSchema)
export default Group
