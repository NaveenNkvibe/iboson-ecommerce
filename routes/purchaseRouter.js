const express = require('express');
const router = express.Router();

const purchaseController = require('../controllers/purchaseController');

router.post('/create', purchaseController.createPurchase);
router.get('/', purchaseController.getPurchases);
router.get('/:id', purchaseController.findPurchase);
router.delete('/delete/:id', purchaseController.deletePurchase);

module.exports = router;