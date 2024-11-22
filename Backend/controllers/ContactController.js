const contact = require("../models/contact");



exports.ContactController = async(req , res)=>{
    
    try{
       const {name , email , message}= req.body ;
       if(!name || !email || !message){
        return res.json({
            success : false ,
            message : "fill all credentials"
        })
       }

       const response = await contact.create({
        name ,
        email ,
        message
       })
       return res.json({
        success :true ,
        response ,
        message :'Thanks For ContactUs'
       })
    }
    catch(error){
        return res.status(401).json({
            success : false ,
            message : error.message
        })

    }

}