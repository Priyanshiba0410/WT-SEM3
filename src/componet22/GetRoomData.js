import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, Card, CardContent, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Delete, Cancel } from '@mui/icons-material';

const GetRoomData = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetchBookedRooms();
    }, []);

    const fetchBookedRooms = async () => {
        try {
            const response = await axios.get('http://localhost:5000/rooms/booked');
            setRooms(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (roomId, roomNo) => {
        try {
            // Delete the booking
            await axios.delete(`http://localhost:5000/api/bookings/${roomId}`);
    
            // Update room status to available
            await axios.put(`http://localhost:5000/${roomNo}`);
    
            // Remove the deleted room from the state
            setRooms(prevRooms => prevRooms.filter(room => room._id !== roomId));
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div style={{ marginTop: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Booked Room Details
            </Typography>
            <Grid container spacing={2}>
                {rooms.map((room) => (
                    <Grid key={room._id} item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {room.name}
                                </Typography>
                                <Typography color="textSecondary">
                                    Room Number: {room.roomNo}
                                </Typography>
                                <Typography color="textSecondary">
                                    Floor Number: {room.floorNo}
                                </Typography>
                                <Typography color="textSecondary">
                                    Check-in Date: {new Date(room.checkInDate).toLocaleDateString()}
                                </Typography>
                                <Typography color="textSecondary">
                                    Check-out Date: {new Date(room.checkOutDate).toLocaleDateString()}
                                </Typography>
                                <Typography color="textSecondary">
                                    Status: {room.status}
                                </Typography>
                            </CardContent>
                            {room.status === 'pending' && (
                                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '8px', paddingBottom: '8px' }}>
                                    <IconButton aria-label="delete" onClick={() => handleDelete(room._id,room.roomNo)}>
                                        <Delete />
                                    </IconButton>
                                </div>
                            )}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default GetRoomData;
