const express = require('express');
const session = require('express-session');
const app = express();

const path = require('path');

require('./src/db')

const {
    PORT = 3000,
    NODE_ENV = 'development',
    SESS_NAME = 'Express Session',
    SESS_SECRET = 'ssh!quiet,it\'asecret!',
    SESS_LIFETIME = 1000 * 60 * 60 * 2 //TWO HOURS
} = process.env;
const IN_PROD = NODE_ENV === 'production';

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}))

app.use('/api',
    require('./src/routes')
)

app.listen(PORT, () => {
    console.info(`App started at http://localhost:${PORT}`);
})
