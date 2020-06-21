const mongoose = require('mongoose');
const { Schema } = mongoose;
const objectId = Schema.ObjectId;

const UserSchema = new Schema({
    author: objectId,
    name: String,
    lastName: String,
    email: {
        type: String,
        require: true
    },
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users', UserSchema);
