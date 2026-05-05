const productModel = require('../models/productModel');

exports.createProduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body)
        res.status(200).json({success: true, data: product})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.getProducts = async (req, res) => {
    try {
        const allProducts = await userModel.find()
        res.status(200).json({success: true, data: allProducts})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.findProduct = async (req, res) => {
    try {
        const productData = await productModel.findById(req.params.id)
        if(!productData){
            return res.status(404).json({message: 'Product Not Found'})
        }
        res.status(200).json({success: true, data: productData})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.updateProduct = async (req, res) => {
    try {
        const productData = await productModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!productData){
            return res.status(404).json({message: 'Product Not Found'})
        }
        res.status(200).json({success: true, data: productData})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.deleteProduct = async (req, res) => {
    try {
        const productData = await productModel.findByIdAndDelete(req.params.id)
        if(!productData){
            return res.status(404).json({message: 'Product Not Found'})
        }
        res.status(200).json({success: true, data: productData})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}