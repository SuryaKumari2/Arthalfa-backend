const express=require('express');
const router=express.Router();
const {createProduct, deleteProduct, getAllProduct, getProductById, updateProduct} =require('../controller/productController');

router.post('/products',createProduct);
router.get('/products',getAllProduct);
router.get('/products/:id',getProductById);
router.delete('/products/:id',deleteProduct);
router.put('/products/:id',updateProduct);

module.exports=router