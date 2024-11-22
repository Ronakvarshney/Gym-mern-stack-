const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User' ,
    }
    ,
    gender : {
        type : String ,
    
    },
    dateofBirth :{
      type : String
    }, 
    address : {
        type : String ,
        trim : true
    },
    phone : {
        type : Number ,
        trim : true

    }
    
})

module.exports = mongoose.model('Profile' , ProfileSchema)