const mongoose=require('mongoose');
const productModel=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String},
    category:{type:String,required:true},
})
module.exports=mongoose.model('Product',productModel)