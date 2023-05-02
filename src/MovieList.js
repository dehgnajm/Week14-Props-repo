import React from 'react';
import Movie from './Movie';

//define the components of Movielist
const MovieList = ({ movies }) => {
  return (
    // Render a container div with the "movie-list" class
    //then, map through the movies array and render a Movie component for each movie
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
//Export the MovieList component as the default export
export default MovieList;
