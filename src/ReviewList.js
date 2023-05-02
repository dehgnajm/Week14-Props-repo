import React from 'react';

//define the components of reviewlist
const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <h3>Reviews:</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            // Render each review as a list item
            <li key={index}>{review}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
