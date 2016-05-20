var pg = require('pg');
// the path of the database used on the localhost
var conString = "postgres://username:password@localhost/nameof the database";
//at first the databse is initiallized to null
var db=null;

// function to connect to the database when the server is run
exports.connect=function(cb){
  pg.connect(conString,function(err,client){
    if(err) {
      return console.error('error fetching client from pool', err);
    } else {
      //intiallizing the database to be used later in the routes
      db=client;
      cb(err,client);
    }
  });
}
exports.db=function(){
  //if the database is not initiallized an error will be thrown
  if (db === null) throw Error('DB Object has not yet been initialized');
  return db;
}
