const mongoose = require('mongoose');
const { Schema } = mongoose;
const objectId = Schema.ObjectId;

const UserSchema = new Schema({
    author: objectId,
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users', UserSchema);
