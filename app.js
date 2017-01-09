var express = require('express');
var app = express();

/*app.listen(3000, function(){
  console.log("This application is running on localhost:3000");
});*/

app.listen(process.env.PORT || 3000)

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//home
/*app.get('/', function(req, res){
  res.render('home',{
    title: "home",
  });
});*/

app.get('/', routes.home);


/*app.get('/hello/:number', function(req, res){
  var number = req.params.number;
  res.send("You are in 'hello' <h2>" + number +"</h2>");
});*/

app.get('/star_wars_episode/:number', routes.movie_single);

//not found
/*app.get('*', function(req, res){
  res.send("<h1>Error 404</h1> <h2>Page not found</h2>");
});*/

app.get('*',routes.notFound);
