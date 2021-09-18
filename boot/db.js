var db = require('../db');


module.exports = function() {

  db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS users ( \
      username TEXT UNIQUE, \
      hashed_password BLOB, \
      salt BLOB, \
      points INT \
    )");
  });

  //db.close();

  db.each("SELECT rowid AS id, username, points FROM users", function(err, row) {
    console.log(row.id + ": " + row.points + " | " + row.username);
  });
};