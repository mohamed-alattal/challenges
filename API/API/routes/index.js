var express = require('express');
var router = express.Router();
var database= require('../public/javascripts/db');


//connect to the database
database.connect(function(err,client){
  if(err) console.log("error connecting to database");
  console.log("databes is successfully connected");
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// endpoint to store a new price entry
router.post('/api/storeprice',function(req,res){
   var url= req.body.url;
   var price= req.body.price;
   var currency= (price[price.length-1]==='$')?'USD':'EUR';
  database.db().query('SELECT * FROM products WHERE url= $1',[url],function(err,result){
    if(err || result.rows.length==0) res.send('no data mach the url'+' '+result.rows.length+' '+err);

    else{

    var pid= result.rows[0].id;
  
    // here the element is inserted with a hardcoded id but it should be an autoi_increment field
    database.db().query('INSERT INTO prices VALUES ($1,$2,clock_timestamp(),$3,$4)',[1003,pid,parseFloat(price),currency],function(err,resu){
      if(err) res.send('insertion failed'+' '+err);
      else
      res.send('insertion successful');
    });
  }
  });
});
// endpoint for displaying list of products of a store
router.get('/api/store/:url',function(req,res){
  database.db().query('select * from stores where url=$1',[req.params.url],function(err,result){
    if(err) res.send('no store matches that url');
    else{
      var sid= result.rows[0].id;
      database.db().query('select p.id,max(ps.value),min(ps.value),count(ps.value) as "count" from products p inner join prices ps ON (p.id=ps.products_id) where stores_id=$1 GROUP BY p.id',[sid],function(err,result){
        if(err) res.send('no products for this store');
        else{
          res.send(result);
        }
      });
    }
  });
});

//endpoint to get the prices between Ath price and the Bth price inclusive
router.get('/api/product/:url/:a/:b',function(req,res){
  var url=req.params.url;
  var lb= req.params.a;
  var hb= req.params.b;

  database.db().query('SELECT ps.products_id,ps.value,ps.currency FROM prices ps inner join products p on(ps.products_id=p.id) WHERE p.url=$1',[url],function(err,result){
    if(err) res.send('there is no products with that id')
    else{
      res.send(result.rows.slice(lb,hb+1));
    }
  });
});

module.exports = router;
