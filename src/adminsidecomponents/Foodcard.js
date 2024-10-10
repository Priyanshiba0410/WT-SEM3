// FoodCard.js
import React from 'react';
import { Card, CardContent, Button } from '@mui/material';

const Foodcard = ({ dishName, dishCategory, dishPrice, dishImage, dishRating, onDelete, onUpdate }) => {
  return (
    <Card style={{ margin: '10px', minWidth: '300px', maxWidth: '300px' }}>
      <CardContent>
        <img src={dishImage} alt={dishName} style={{ width: '100%', height: 'auto' }} />
        <h3>{dishName}</h3>
        <p>Category: {dishCategory}</p>
        <p>Price: {dishPrice}</p>
        <p>Rating: {dishRating}</p>
        <Button variant="outlined" color="primary" onClick={onUpdate}>Update</Button>
        <Button variant="outlined" color="error" onClick={onDelete}>Delete</Button>
      </CardContent>
    </Card>
  );
};

export default Foodcard;
