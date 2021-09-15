var express = require('express');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var router = express.Router();
var db = require('../db');

router.get('/', ensureLoggedIn(), function (req, res, next) {
    /*var intPoints = parseInt(req.user.points);
    console.log("ID: " + req.user.id);
    console.log("points-before: " + req.user.points);
    console.log("intPoints-before: " + intPoints);
    db.run('UPDATE users SET points = ? WHERE rowid = ?', [ intPoints += 10, req.user.id ], function (err) {});
    req.user.points = intPoints;
    console.log("points-after: " + req.user.points);
    console.log("intPoints-after: " + intPoints);*/
    res.render('minecraft', {user: req.user});
});

router.post('/', function (req, res, next) {
    var intPoints = parseInt(req.user.points);
    var intBodyPoints  = parseInt(req.body.points);
    db.run('UPDATE users SET points = ? WHERE rowid = ?', [ intPoints += intBodyPoints, req.user.id ], function (err) {});
    req.user.points = intPoints;
    res.redirect('/minecraft');
})

module.exports = router;