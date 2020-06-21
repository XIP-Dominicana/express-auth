const express = require('express');
const router = express.Router();

const User = require('../models/users.model');

router.get('/', async (req, res) => {
    const { user } = req.session;
    if(user){
        res.status(201).send(req.session);
    }else{

    }
    res.status(200).send(req.session);
})

router.post('/', async (req, res) => {
    const origin = req.headers.origin;
    const { user, password } = req.body;
    const users = await User.find({});

    const currentUser = users.find(e =>
        e.user === user && e.password === password
    );
    if(currentUser){
        req.session.user = currentUser;
        return res.redirect(`${origin}/home.html`);
    }else{
        res.end();
    }
});

module.exports = router;
