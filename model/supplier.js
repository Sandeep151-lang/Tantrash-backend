const mongoose = require('mongoose')

const supplier = mongoose.Schema({
    supplierType :{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    number:{type:Number,required:true}
},{ timestamps: true } )

module.exports = mongoose.model('spplier',supplier)