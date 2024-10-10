const productModel=require('../model/productModel');
exports.createProduct=async(req,res)=>{
   try {
    const product=new productModel(req.body);
   await product.save();
   res.status(200).json({msg:'product created succesfully'})
    
   } catch (error) {
    res.status(500).json({msg:'error in creating product'})
    
   }


}
exports.deleteProduct=async(req,res)=>{
    try {
        const product=await productModel.findByIdAndDelete(req.params.id);
        if(!product) return res.status(404).json({msg:'product not found'});
        return res.status(200).json({msg:'deleted succesfully'});
        
    } catch (error) {
        res.status(500).json({msg:'error in deleting product'})
    }

}
exports.getAllProduct=async(req,res)=>{
    try {
        const products=await productModel.find();
        return res.status(200).json(products)
       
        
    } catch (error) {
        res.status(500).json({msg:'error in getting product by id'})
    }

}
exports.getProductById=async(req,res)=>{
    try {
        const product=await productModel.findById(req.params.id);
        if(!product) return res.status(404).json({msg:'product not found'});
        return res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({msg:'error in getting product by id'})
    }

}
exports.updateProduct=async(req,res)=>{
    try {
        const product=await productModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!product) return res.status(404).json({msg:'product not found'});
        return res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({msg:'error in getting product by id'})
    }

}