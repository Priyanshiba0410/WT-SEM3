import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material'; // Import CircularProgress for the loading spinner
import FoodCard from './Foodcard';

const GetFood1 = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [selectedFoodItem, setSelectedFoodItem] = useState(null); // State to track the selected food item for update
  const [updatedFoodItem, setUpdatedFoodItem] = useState({
    dishName: '',
    dishCategory: '',
    dishPrice: '',
    dishImage: '',
    dishRating: '',
  });

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

  // Function to handle deletion of a food item
  const handleDeleteFoodItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/food/${id}`);
      // Remove the deleted food item from the state
      setFoodItems(foodItems.filter((food) => food._id !== id));
    } catch (error) {
      console.error('Error deleting food item:', error);
    }
  };

  // Function to handle updating a food item
  const handleUpdateFoodItem = (foodItem) => {
    setSelectedFoodItem(foodItem);
    setUpdatedFoodItem({ ...foodItem });
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFoodItem({ ...updatedFoodItem, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/food/${selectedFoodItem._id}`, updatedFoodItem);
      // Update the food item in the state with the updated data
      const updatedFoodItems = foodItems.map((food) =>
        food._id === selectedFoodItem._id ? { ...food, ...updatedFoodItem } : food
      );
      setFoodItems(updatedFoodItems);
      setSelectedFoodItem(null);
      setUpdatedFoodItem({
        dishName: '',
        dishCategory: '',
        dishPrice: '',
        dishImage: '',
        dishRating: '',
      });
    } catch (error) {
      console.error('Error updating food item:', error);
    }
  };

  // Function to handle cancelling the update
  const handleCancelClick = () => {
    setSelectedFoodItem(null);
    setUpdatedFoodItem({
      dishName: '',
      dishCategory: '',
      dishPrice: '',
      dishImage: '',
      dishRating: '',
    });
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: "790px" }}>
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
            onDelete={() => handleDeleteFoodItem(food._id)} // Pass the delete function to the FoodCard component
            onUpdate={() => handleUpdateFoodItem(food)} // Pass the food item directly to the update function
          />
        ))
      )}
      {selectedFoodItem && (
        // Pop-up form for updating food item details
        <div className="update-form-container">
          <h3>Update Food Item</h3>
          <form onSubmit={handleSubmit} className="update-form">
            <input type="text" name="dishName" value={updatedFoodItem.dishName} onChange={handleChange} placeholder="Dish Name" required />
            <input type="text" name="dishCategory" value={updatedFoodItem.dishCategory} onChange={handleChange} placeholder="Category" required />
            <input type="number" name="dishPrice" value={updatedFoodItem.dishPrice} onChange={handleChange} placeholder="Price" required />
            <input type="text" name="dishImage" value={updatedFoodItem.dishImage} onChange={handleChange} placeholder="Image URL" required />
            <input type="text" name="dishRating" value={updatedFoodItem.dishRating} onChange={handleChange} placeholder="Rating" required />
            <button type="submit" className="submit-btn">Save Changes</button>
            <button onClick={handleCancelClick} className="cancel-btn">Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GetFood1;
