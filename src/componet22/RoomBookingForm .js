import React, { useState } from 'react';
import axios from 'axios';
import { Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const RoomBookingForm = ({ room, onBookingSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobileNo: '',
        checkInDate: '',
        checkOutDate: '',
        countOfUser: ''
    });

    const [bookingError, setBookingError] = useState('');
    const [dialogOpen, setDialogOpen] = useState(true);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleSubmit = async () => {
        try {
            // Simple validation to ensure all fields are filled
            if (!formData.name || !formData.mobileNo || !formData.checkInDate || !formData.checkOutDate || !formData.countOfUser) {
                setBookingError('Please fill in all fields.');
                return;
            }

            const response = await axios.post('http://localhost:5000/rooms/book', {
                ...formData,
                roomNo: room.roomNo,
                floorNo: room.floorNo
            });
            if (response.data) {
                onBookingSuccess(); // Callback function to handle successful booking
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                setBookingError(error.response.data.error || 'An error occurred while booking the room.');
            } else {
                setBookingError('An error occurred while booking the room.');
            }
        }
    };

    return (
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
            <DialogTitle>Book Room {room.roomNo}</DialogTitle>
            <DialogContent>
                <Typography variant="body1" gutterBottom>
                    Please provide your details to book this room.
                </Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Mobile Number"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Check-In Date"
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Check-Out Date"
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Number of Users"
                    name="countOfUser"
                    type="number"
                    value={formData.countOfUser}
                    onChange={handleChange}
                />
                {bookingError && (
                    <Typography variant="body2" color="error" gutterBottom>
                        {bookingError}
                    </Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} color="primary">
                    Book
                </Button>
                <Button onClick={handleCloseDialog} color="secondary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RoomBookingForm;
