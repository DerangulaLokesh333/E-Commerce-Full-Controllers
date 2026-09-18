
const productService = require('../services/productService');


const getAllProducts = (req, res) => {
    const message = productService.getAllProducts();
    res.send(message);
};


const addProduct = (req, res) => {
    const message = productService.addProduct();
    res.send(message);
};


const getProductById = (req, res) => {
    const id = req.params.id;

    const message = productService.getProductById(id);

    res.send(message);
};

module.exports = {
    getAllProducts,
    addProduct,
    getProductById
};