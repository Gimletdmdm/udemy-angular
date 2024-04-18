const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const UserCtrl = require('../controllers/user');


// find()はコールバックを引数に取れなくなったので注意⇒非同期処理で対応する
router.get('', async (req, res) => {
    try {
        foundProducts = await Product.find({});
        return res.json(foundProducts);
    } catch(err) {
        res.status(422).send({error: [{title: 'product error', detail: 'Product not found'}]})
    }
    
    
});

router.get('/:productId', UserCtrl.authMiddleware, async (req, res) => {
    const productId = req.params.productId;
    try {
        foundProduct = await Product.findById(productId);
        return res.json(foundProduct);
    } catch(err) {
        res.status(422).send({error: [{title: 'ProductId error', detail: 'ProductId not found!'}]});
    }
});



module.exports = router;