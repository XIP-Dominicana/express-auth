const express = require('express');
const app = express();
const session = require('./src/session');
const politics = require('./src/politics');
const path = require('path');

//Database Initialization
require('./src/db');

app.use(express.urlencoded({extended: false}));

app.use(session);

app.use(politics);

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/api',
    require('./src/routes')
);

app.listen(8080, () => {
    console.info(`App started at http://localhost:${8080}`);
})
