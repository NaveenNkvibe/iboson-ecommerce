const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.findProduct);
router.put('/update/:id', productController.updateproduct);
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;