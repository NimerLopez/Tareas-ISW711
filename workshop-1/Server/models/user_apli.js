const mongoose = require('mongoose');
const UserScheme=mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    email:{
        type:String,
    }
});
module.exports=mongoose.model('user',UserScheme)