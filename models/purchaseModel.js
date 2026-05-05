const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    product_details:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    purchase_date:{
        type: String,
        required: true
    },
    purchase_amount:{
        type: String,
        required: true
    },
}, {timestamp: true})

module.exports = mongoose.model('Purchases', purchaseSchema);