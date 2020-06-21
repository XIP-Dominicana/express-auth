const session = require('express-session');

const {
    NODE_ENV = 'development',
    SESS_NAME = 'Express Session Name',
    SESS_SECRET = 'ssh!quiet,it\'a secret!',
    SESS_LIFETIME = 1000 * 60 * 60 //One Hour
} = process.env;

const IN_PROD = NODE_ENV === 'production';

module.exports = session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
});
