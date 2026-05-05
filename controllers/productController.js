const productModel = require('../models/productModel');

exports.createProduct = async (req, res) => {
    try {
        const product = productModel.create(req.body)
        res.status(200).json({success: true, data: product})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.getProducts = async (req, res) => {
    try {
        const allProducts = userModel.find()
        res.status(200).json({success: true, data: allProducts})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.findProduct = async (req, res) => {
    try {
        const productData = productModel.findById(req.params.id)
        if(!productData){
            res.status(404).json({message: 'Product Not Found'})
        }
        res.status(200).json({success: true, data: productData})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.updateProduct = async (req, res) => {
    try {
        const productData = productModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidator: true})
        if(!productData){
            res.status(404).json({message: 'Product Not Found'})
        }
        res.status(200).json({success: true, data: productData})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.deleteProduct = async (req, res) => {
    try {
        const productData = productModel.findByIdAndDelete(req.params.id)
        if(!productData){
            res.status(404).json({message: 'Product Not Found'})
        }
        res.status(200).json({success: true, data: productData})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}