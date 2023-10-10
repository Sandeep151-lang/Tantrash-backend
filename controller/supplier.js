const express = require('express')
const supplier = require('../model/supplier')
const router = express.Router()


// created supplier
router.post('/create',async(req,res)=>{
    const {supplierType,name,email,address,number} = req.body
    try {
        const isExist =await supplier.findOne({email:email})
        if(isExist){
            return res.status(400).json({message:`Supplier already exist.`})
        }
        const data = await supplier({
            supplierType,
            name,
            email,
            address,
            number
        })

        await data.save()
        return res.status(201).json({message:`Supplier Creted successfully.`})
    } catch (error) {
       return res.status(500).json({message:`Something went wrong`})
    }
})


// get all the supplier
router.get('/list',async(req,res)=>{
    try {
        const result = await supplier.find()
        return res.status(200).json(result)
    } catch (error) {
       return res.status(500).json({message:`Something went wrong`})
    }
})


// update the supplier
router.put('/update/:_id',async(req,res)=>{
    const {_id}= req.params
    try {
        const result = await supplier.findByIdAndUpdate({_id:_id},req?.body,{new:true})
        if(result){
            return res.status(200).json({message:`Supplier updated successfully.`})
        }
    } catch (error) {
        res.status(500).json({message:`Something went wrong`})
    }
})



// delete the supplier
router.delete('/delete/:_id',async(req,res)=>{
    try {
        const {_id}= req?.params
        
        await supplier.deleteOne({_id:_id}).then(()=>{
            return res.status(200).json({message:`Supplier deleted successfully.`})
        }).catch((err)=>{
            return res.status(500).json({message:err})
        })
    } catch (error) {
        res.status(500).json({message:`Something went wrong.`})
    }
})



module.exports = router