import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Card, CardContent, Typography } from '@mui/material'; // Import components from Material-UI
import './Feedback.css'; // Import CSS file for styling

const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/feedback');
        setFeedback(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="feedback-container">
      <h2>Feedback : -</h2>
      {loading ? ( // Show loading spinner if loading is true
        <CircularProgress />
      ) : (
        <div className="feedback-list ">
          {feedback.map((item) => (
            <Card key={item._id} className="feedback-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>{item.rating}/5 Stars</Typography>
                <Typography>{item.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackComponent;
