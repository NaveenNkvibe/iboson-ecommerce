const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
        required: true
    },
    product__id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    purchase_date:{
        type: Date,
        required: true
    },
    purchase_amount:{
        type: String,
        required: true
    },
}, {timestamp: true})

module.exports = mongoose.model('Purchase', purchaseSchema);