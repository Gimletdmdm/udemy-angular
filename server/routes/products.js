const express = require('express');
const router = express.Router();
const Product = require('../model/product')

// find()はコールバックを引数に取れなくなったので注意⇒非同期処理で対応する
router.get('', (req, res) => {
    try {
        foundProducts = Product.find({});
        return res.json(foundProducts);
    } catch(err) {
        res.status(422).send({error: [{title: 'product error', detail: 'Product not found'}]})
    }
    
    
});

router.get('/:productId', (req, res) => {
    const productId = req.params.productId;
    try {
        foundProduct = Product.findById(productId);
        return res.json(foundProduct);
    } catch(err) {
        res.status(422).send({error: [{title: 'ProductId error', detail: 'ProductId not found!'}]});
    }
});

module.exports = router;