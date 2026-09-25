import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,

    },
    
},{timestamps:true})