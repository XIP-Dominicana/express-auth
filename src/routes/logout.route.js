const router = require('express').Router();

router.post('/', async (req, res) => {

    const origin = req.headers.origin;

    req.session.destroy((error) => {
        if(error){
            console.error('E: logout.route', error);
            return res.status(500).send(error);
        }else{
            return res.redirect(`${origin}/login.html`);
        }

    })
});

module.exports = router;
