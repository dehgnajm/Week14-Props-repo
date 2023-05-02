import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';


//define movie components
const Movie = ({ movie }) => {
  //Setting up state variables using the useState hook
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  //create a Function to add a review to the reviews state
  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  //create a Function to handle rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  //Render the movie title in h2 and youtube video in iframe
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <iframe
        title={movie.title}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${movie.videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>{movie.synopsis}</p>
      <h3>Rate this movie:</h3>
      <Stars rating={rating} onRatingChange={handleRatingChange} />
      <ReviewList reviews={reviews} />
      <ReviewForm addReview={addReview} />
    </div>
  );
};
//Export the Movie component as the default export
export default Movie;
