const purchaseModel = require('../models/purchaseModel');

exports.createPurchase = async (req, res) => {
    try {
        const purchase = await purchaseModel.create(req.body)
        res.status(200).json({success: true, data: purchase})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.getPurchases = async (req, res) => {
    try {
        const allPurchases = await userModel.find()
        res.status(200).json({success: true, data: allPurchases})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.findPurchase = async (req, res) => {
    try {
        const purchaseData = await purchaseModel.findById(req.params.id)
        if(!purchaseData){
            return res.status(404).json({message: 'Purchase Not Found'})
        }
        res.status(200).json({success: true, data: purchaseData})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
// exports.updatePurchase = async (req, res) => {
//     try {
//         const purchaseData = await purchaseModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
//         if(!purchaseData){
//             return res.status(404).json({message: 'Purchase Not Found'})
//         }
//         res.status(200).json({success: true, data: purchaseData})
//     } catch (error) {
//         res.status(400).json({message: error.message})
//     }

// }
exports.deletePurchase = async (req, res) => {
    try {
        const purchaseData = await purchaseModel.findByIdAndDelete(req.params.id)
        if(!purchaseData){
            return res.status(404).json({message: 'Purchase Not Found'})
        }
        res.status(200).json({success: true, data: purchaseData})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}