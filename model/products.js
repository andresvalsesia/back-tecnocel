const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
       
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    brand:{
         type:String,
        
    },
    color:{
        type: String,
    },
    sizeTv:{
        type: String,
    },
    RAM:{
        type: Number,
        
    },
    images:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    stock:{
        type: Number,
        required:true
      
    },
    system:{
        type:String
    },
    disc:{
        type:String
    },
    processor:{
        type:String
    }
 
})


const Product = mongoose.model("Products",productSchema);

module.exports = Product;