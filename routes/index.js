var express = require('express');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
});

/*router.post('/', ensureLoggedIn, function(req, res, next) {
  db.get('SELECT points FROM users WHERE rowid =?' [req.user.id], function (err, row) {
    var i = row.points;
    console.log(i);
  });
  console.log(i);
  res.end();
});*/

/*db.run('INSERT INTO users (points) VALUES (?) WHERE rowid = ?', [ body.add, user.id]);
db.run('INSERT INTO users (points) VALUES (?) WHERE rowid = ?', [ body.sub, user.id]);
point_val = db.get('SELECT points FROM users WHERE rowid = ?' [user.id]);
var stmt = db.prepare("INSERT INTO users (points) VALUES (?) WHWERE rowid = user.id");*/

module.exports = router;
