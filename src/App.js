import React from 'react';
import './App.css';
import MovieList from './MovieList';

function App() {
  //create an array for movies that hod their information
  const movies = [
    {
      id: 1,
      title: 'The Expendables 3',
      videoId: 'ZFrU0ntvP68',
      synopsis: 'Synopsis of Movie 1',
    },
    {
      id: 2,
      title: 'Contact',
      videoId: 'i7na-m_Mw0U',
      synopsis: 'Synopsis of Movie 2',
    },
  ];
  

  return (
    //Rendering the MovieList component and passing the movies array as props 
    <div className="app">
      <h1 className="title">Movie Reviews</h1>
     <MovieList movies={movies} /> 
    </div>
  );
}

export default App;
