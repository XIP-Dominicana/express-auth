const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/session-manager'

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.info('!-----------Connected to the database-----------!');
}).catch(err => {
    console.error('Error while connecting to the database! -> ', err.message);
})

module.exports = mongoose;
