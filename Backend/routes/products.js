const router = require('express').Router();
const {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controller/Products");

module.exports = (app) => {
    router.get('/', getAllProducts);
    router.get('/products/:id', getProductById); 
    router.post('/create', createProduct);
    router.patch('/update/:id', updateProduct); 
    router.delete('/delete/:id', deleteProduct); 
    app.use('/api/products', router);}