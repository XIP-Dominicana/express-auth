const router = require('express').Router();

router.use(
    '/login',
    require('./login.route')
)

router.use(
    '/registry',
    require('./register.route')
)

router.use(
    '/logout',
    require('./logout.route')
)

module.exports = router;
