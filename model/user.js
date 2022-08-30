const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    name: {type:String,required:true},
    email:{type:String,required:true},
    password:{type:Array,required:true},
    from:{type:Array},
    role:{type:String,default:"user"},
    uniqueString:{type:String,required:true},
    verification:{type:Boolean,required:true}
})

const User=mongoose.model('users',userSchema);

module.exports=User;