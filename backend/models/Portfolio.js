const mongoose = require('mongoose')
const { Schema } = mongoose;

const PortSchema = new Schema({
    pic: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    about: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    hobbies: {
        type: String,
        required: true
    },
    education: {
        type: Array,
        required: true
    },
    experience: {
        type: Array,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        unique: true
    },
    stars: {
        type: Number,
        default: 0
    },
    ratenum: {
        type: Number,
        default: 0
    },
    documents: {
        type: Array,
        default: []
    }

});

const Portfolio = mongoose.model('portfolio', PortSchema);
// User.createIndexes(); ...this will create indexes but we will write another logic for it

module.exports = Portfolio;