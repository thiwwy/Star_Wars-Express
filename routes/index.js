var moviesJSON = require("../movies.json")

exports.home = function(req, res){
  var movies = moviesJSON.movies;
  res.render('home',{
    title: "Star Wars Movie",
    movies: movies
  });
};

exports.movie_single = function(req, res){
  var num_episode = req.params.number;
  var index = num_episode-1;
  var movies = moviesJSON.movies;
  var movie = movies[index];
  if (num_episode>0 && num_episode<=movies.length)
      res.render('single_movie', {
        title: movie.title,
        movies: movies,
        movie: movie,
        main_characters: movie.main_characters
      });
  else {
    res.render('404',{
      title: "Not Found",
      movies: movies
    });
  }
};

//not found
exports.notFound = function(req, res){
  var movies = moviesJSON.movies;
  res.render('404',{
    title: "Not Found",
    movies: movies
  });
};
