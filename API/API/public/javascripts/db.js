var pg = require('pg');
var conString = "postgres://mohamedalattal:Anamshana1@localhost/followprice_challenge";
var db=null;

// function to connect to the database when the server is run
exports.connect=function(cb){
  pg.connect(conString,function(err,client){
    if(err) {
      return console.error('error fetching client from pool', err);
    } else {
      db=client;
      cb(err,client);
    }
  });
}
exports.db=function(){
  if (db === null) throw Error('DB Object has not yet been initialized');
  return db;
}
