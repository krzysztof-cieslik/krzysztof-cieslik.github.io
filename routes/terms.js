var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('terms', { user: req.user });
});

module.exports = router;