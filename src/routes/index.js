const express = require('express');
const router = express.Router();

router.use(
    '/home',
    require('./home.route')
)

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
