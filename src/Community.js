import React, { useState } from 'react';
import './Community.css';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    setSubmitted(true);
  };

  const handleStarDoubleClick = () => {
    setRating(0);
  };

  return (
    <div className="feedback-form">
      {submitted ? (
        <div className="thank-you-message">
          <p>Thank you for your feedback!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="feedback-rating">
            <label>How much effort did it take you to achieve your goal?</label>
            <div className="rating-scale">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= (hoverRating || rating) ? 'selected' : ''}`}
                  onClick={() => handleRatingChange(star)}
                  onDoubleClick={handleStarDoubleClick}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>
          <div className="feedback-comment">
            <label>Do you have any suggestions to improve our website?</label>
            <textarea value={feedback} onChange={handleFeedbackChange} />
          </div>
          <div className="feedback-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
