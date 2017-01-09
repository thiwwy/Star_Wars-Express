var moviesJSON = require('../movie.json');

exports.home = function(req, res){

  var movies = moviesJSON.movies;

  res.render('home', {
    title : "home",
    movies : "ciao"
  });
};

exports.movie_single = function(req, res){
  var number = req.params.number;
  res.send("You are in 'hello' <h2>" + number +"</h2>");
};

//not found
exports.notFound = function(req, res){
  res.send("<h1>Error 404</h1> <h2>Page not found</h2>");
};
