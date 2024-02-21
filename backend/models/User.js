const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    }

});

const User = mongoose.model('users', UserSchema);
// User.createIndexes(); ...this will create indexes but we will write another logic for it

module.exports = User;