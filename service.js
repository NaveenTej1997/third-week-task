var http = require("http");
 var express = require('express');
 var app = express();
 var mysql      = require('mysql');
 var bodyParser = require('body-parser');
 var cors = require("cors");
app.use(cors());

 var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'employeedb'
});
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})

  //CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var server = app.listen(4000, "127.0.0.1", function () {
  var host = server.address().address
  var port = server.address().port 
  console.log("Example app listening at http://%s:%s", host, port)
});

app.get('/get', function (req, res) {
  connection.query('select * from user', function (error, results, fields) {
  if (error) throw error;
  res.send(JSON.stringify(results));
  res.end(JSON.stringify(results));
});
});

app.delete('/delete/:id', (req, res) => {
  console.log(req.params.id);
 
 const dat = [req.params.id]
 const del = 'DELETE FROM user WHERE user_id= ?'
  connection.query(del, dat, function (error, results, fields) {
   if (error) throw error;
   
   console.log('Deleted Row(s):', results.affectedRows);
  res.end('Record has been deleted!');
 });
});


app.post('/post',(req, res) => {
  let data = {name: req.body.name, phone: req.body.phone, email: req.body.email,course:req.body.course,notes:req.body.notes};
  let sql = "INSERT INTO user SET ?";
  let query = connection.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});


