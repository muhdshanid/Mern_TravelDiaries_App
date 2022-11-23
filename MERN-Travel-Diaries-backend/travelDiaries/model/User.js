import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },
    posts:[{type:mongoose.Types.ObjectId,ref:"Post"}]
})

export default model("User",userSchema);
//users