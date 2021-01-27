const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/products', controller.getAllProducts);
router.get('/products/:id', controller.getProductById);
router.post('/products', controller.addProduct);
router.put('/products/:id', controller.updateProductById);
router.delete('/products/:id', controller.removeProductById);

module.exports = router;
