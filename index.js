const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const supplier = require('./controller/supplier')
const env = require('dotenv')


app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
const option ={
    origin:true,
    Credential:true
}
app.use('*',cors())
app.use(cors(option))
env.config()

require('./db/dbConfig')


// supplier routes create 
app.use('/supplier',supplier)




app.use(function(req,res){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET, PUT,POST,DELETE')
})



app.listen(2000,(err)=>{
    if(err) throw err
    console.log(`server is running in ${2000}`)
})