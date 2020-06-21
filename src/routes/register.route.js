const express = require('express');
const router = express.Router();
const User = require('../models/users.model');

router.post('/', async (req, res) => {
    const newUser = new User({...req.body});
    newUser.save()
        .then(data => {
            req.session.user = data;
            res.redirect(`${req.headers.origin}/home.html`);
        }).catch(err => {
            res.redirect(`${req.headers.origin}/registry.html`);
        })
})

module.exports = router;
