let products = require('./products');

exports.getAllProducts = (req, res) => {
    console.log('Returning all products');
    res.send(products);
}

exports.getProductById = (req, res) => {
    const id = req.params.id;
    const product = products.find(prod => prod.id === id);

    if (product) {
        res.send(product);
    }
    else {
        res.send(`No results found for products with id ${id}`);
    }
}

exports.addProduct = (req, res) => {
    const newProduct = req.body;

    if (Object.keys(newProduct).length === 0 
        && newProduct.constructor === Object) {
        res.status(400).send('Invalid product');
        return;
    }
    products.push({...newProduct});


    console.log(`Added new product ${newProduct.productName}`);
}

exports.updateProductById = (req, res) => {
    const product = products.find(prod => prod.id === req.params.id);

    product.productName = req.body.productName;
    product.quantity = req.body.quantity;
    res.send(product);
    console.log(`product with id ${req.params.id} updated`);
}

exports.removeProductById = (req, res) => {
    products = products.filter(prod => prod.id !== req.params.id);
    res.status(204).send();
    console.log(`product with id ${req.params.id} has been removed`);
}