// GetFood.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material'; 
import FoodCard from './FoodCard';
import './getFood.css'; 

const GetFood = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/food');
        setFoodItems(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchFoodItems();
  }, []);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: "260px",marginLeft:"140px",marginBottom:'80px' }}>
      {loading ? ( // Show loading dialog if loading is true
        <CircularProgress />
      ) : (
        foodItems.map((food) => (
          <FoodCard
            key={food._id} // Assuming each food item has a unique ID
            dishName={food.dishName}
            dishCategory={food.dishCategory}
            dishPrice={food.dishPrice}
            dishImage={food.dishImage}
            dishRating={food.dishRating}
          />
        ))
      )}
    </div>
  );
};

export default GetFood;
