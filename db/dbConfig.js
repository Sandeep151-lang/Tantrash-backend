const mongoose = require('mongoose')

const password = `h95iWAGRgZkkUtAe`
const userName = `sandeepnandanwar92`
url = `mongodb+srv://${userName}:${password}@cluster0.crgihnd.mongodb.net/`
const connect = mongoose.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true}).then(()=> console.log(`Database connected`)).catch((err)=> console.log(`Database not connected`))

module.exports = connect