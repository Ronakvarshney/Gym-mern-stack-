const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true 
    }, 
    password : {
        type : String ,
        required : true
    } ,
    profile : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Profile'
    },
    token : {
        type : String
    },
    payment : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Payment'
    }
})

module.exports = mongoose.model('User' , UserSchema)