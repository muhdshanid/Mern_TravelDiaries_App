import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true
    },
    user:{type:mongoose.Types.ObjectId,ref:"User",require:true}
})

export default mongoose.model("Post",postSchema)