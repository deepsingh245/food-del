const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide your name']
        },
        location:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default: Date.now()  //this will automatically set the current time when a user is
        }
    }
);

module.exports = mongoose.model('user2', UserSchema)