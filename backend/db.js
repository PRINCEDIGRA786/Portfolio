const mongoose = require('mongoose')
// const mongoURI = "mongodb://127.0.0.1:27017/portfolio"
const mongoURI = "mongodb+srv://digraprince7:digraprince@cluster0.ujhz7cq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = async () => {
    // mongoose.set('strictQuery', true)
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI)
        console.log('Mongo connected successfully')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectToMongo;