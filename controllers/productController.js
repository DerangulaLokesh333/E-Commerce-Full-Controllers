
const productService = require('../services/productService');


const getAllProducts = (req, res) => {
    const message = productService.getAllProducts();
    res.send(message);
};


const addProduct = (req, res) => {
    const message = productService.addProduct();
    res.send(message);
};


const getProductById = (req, res, next) => {
    const id = req.params.id;

    if (!id) {
        const error = new Error('Product ID is required');
        return next(error);
    }

    const message = productService.getProductById(id);

    res.send(message);
};
module.exports = {
    getAllProducts,
    addProduct,
    getProductById
};