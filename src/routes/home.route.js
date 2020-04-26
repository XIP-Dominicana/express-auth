const router = require('express').Router();

router.get('/', async (req, res) => {
    if(!req.session.userId) res.redirect('/');
})

module.exports = router;
