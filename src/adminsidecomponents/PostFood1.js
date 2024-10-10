import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Paper } from '@mui/material';

const PostFood1 = () => {
  const [formData, setFormData] = useState({
    dishCategory: '',
    dishName: '',
    dishPrice: '',
    dishImage: '',
    dishRating: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/food', formData);
      console.log('Food item added successfully');
      setFormData({
        dishCategory: '',
        dishName: '',
        dishPrice: '',
        dishImage: '',
        dishRating: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ height: '600px', overflow: 'auto' ,marginTop:"100px"}}>
      <Paper elevation={3} style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Add Food Item
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="dishCategory"
            label="Category"
            value={formData.dishCategory}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="dishName"
            label="Name"
            value={formData.dishName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="dishPrice"
            label="Price"
            type="number"
            value={formData.dishPrice}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="dishImage"
            label="Image URL"
            value={formData.dishImage}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="dishRating"
            label="Rating"
            type="number"
            value={formData.dishRating}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
            Add Food
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default PostFood1;
