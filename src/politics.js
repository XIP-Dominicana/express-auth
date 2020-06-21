const router = require('express').Router();

/*
Here we have the home restrictions for no logged users
* */

router.all('*', async (req, res, next) => {

    const { user } = req.session;

    switch(req.originalUrl){
        case '/index.html':
            if(user){
                return res.redirect('/home.html');
            }else{
                next();
            }
            break;
        case '/login.html':
            if(user){
                return res.redirect('/home.html');
            }else{
                next();
            }
            break;
        case '/registry.html':
            if(user){
                return res.redirect('/home.html');
            }else{
                next();
            }
            break;
        case '/home.html':
            if(user){
                next();
            }else{
                return res.redirect('/login.html');
            }
            break;
        default:
            if(req.originalUrl.search('api') === -1){
                return res.send('<h1 class="text-center">404 Page not found!</h1>');
            }else{
                next();
            }
    }
});

module.exports = router;
