const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    prize:{
        type: String,
        required: true
    },
    exp_date:{
        type: String,
        required: true
    },
}, {timestamp: true})

module.exports = mongoose.model('Products', productSchema);