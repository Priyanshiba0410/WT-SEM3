// FeedbackForm.js

import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, rating }),
      });
      if (response.ok) {
        setShowSuccessDialog(true);
        // Reset form fields
        setDescription('');
        setRating('');
      } else {
        setShowErrorDialog(true);
      }
    } catch (error) {
      setShowErrorDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setShowSuccessDialog(false);
    setShowErrorDialog(false);
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Success dialog */}
      {showSuccessDialog && (
        <div className="dialog success-dialog">
          <p>Feedback submitted successfully!</p>
          <button onClick={handleCloseDialog}>Close</button>
        </div>
      )}

      {/* Error dialog */}
      {showErrorDialog && (
        <div className="dialog error-dialog">
          <p>Failed to submit feedback. Please try again later.</p>
          <button onClick={handleCloseDialog}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
