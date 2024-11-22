const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        required : true 
    }, 
    message :{
        type : String
    }
})

module.exports = mongoose.model('contact' , ContactSchema)