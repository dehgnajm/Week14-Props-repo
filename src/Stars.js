import React from 'react';


//define the star components
const Stars = ({ rating, onRatingChange }) => {
  //create a function to click on the stars
  const handleClick = (newRating) => {
    onRatingChange(newRating);
  };
  //create a Function to render the stars based on the rating
  const renderStars = () => {
    const stars = [];
//Looping through 1 to 5 to render the stars
    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= rating ? 'star active' : 'star';
      stars.push(
        //Rendering each star element
        <span
          key={i}
          className={starClassName}
          onClick={() => handleClick(i)}
        >
          ★
        </span>
      );
    }

    return stars;
  };

  return <div className="stars">{renderStars()}</div>;
};
//Export the Stars component as the default export
export default Stars;
