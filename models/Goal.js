const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    deadline:{
        type:String
    }

});

module.exports = mongoose.model(
    "Goal",
    goalSchema
);