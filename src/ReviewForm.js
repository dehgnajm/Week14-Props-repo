import React, { useState } from 'react';

//define the components of reviewform
const ReviewForm = ({ addReview }) => {
  //Initializing state for the review input
  const [review, setReview] = useState('');
//create a variable to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() !== '') {
      // Adding the review and resetting the input value
      addReview(review);
      setReview('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h3>Add a Review:</h3>
      <textarea //enter review
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here..."
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
