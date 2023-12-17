const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    description:String,
    target:{
        type:Number,
        required:true,
    },
    deadline:{
        type:Date,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
},{versionKey:false});

const Goal = mongoose.model('Goal',goalSchema);

module.exports = Goal;