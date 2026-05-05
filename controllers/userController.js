const userModel = require('../models/userModel');

exports.createUser = async (req, res) => {
    try {
        const user = await userModel.create(req.body)
        res.status(200).json({success: true, data: user})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.getUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find()
        res.status(200).json({success: true, data: allUsers})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.findUser = async (req, res) => {
    try {
        const userData = await userModel.findById(req.params.id)
        if(!userData){
            return res.status(404).json({message: 'User Not Found'})
        }
        res.status(200).json({success: true, data: userData})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.updateUser = async (req, res) => {
    try {
        const userData = await userModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!userData){
            return res.status(404).json({message: 'User Not Found'})
        }
        res.status(200).json({success: true, data: userData})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}
exports.deleteUser = async (req, res) => {
    try {
        const userData = await userModel.findByIdAndDelete(req.params.id)
        if(!userData){
            return res.status(404).json({message: 'User Not Found'})
        }
        res.status(200).json({success: true, data: userData})
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}