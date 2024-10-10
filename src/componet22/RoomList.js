import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, Card, CardContent, Button, Modal, Box } from '@mui/material';
import RoomBookingForm from './RoomBookingForm '; // Assuming you have this component
import { useNavigate } from 'react-router-dom';

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            const response = await axios.get('http://localhost:5000/rooms');
            const filteredRooms = response.data.filter(room => room.status !== 'booked'); // Filter out booked rooms
            setRooms(filteredRooms);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleBookNow = (room) => {
        setSelectedRoom(room);
        setOpenModal(true);
    };

    const handleBookingSuccess = async () => {
        try {
            const roomId = selectedRoom._id;
            const url = `http://localhost:5000/rooms/${roomId}/book`;

            // Update the status of the booked room
            await axios.put(url);

            // Fetch the updated list of rooms
            fetchRooms();

            // Close the modal and navigate to the booking success page
            setOpenModal(false);
            navigate('/home/roomdata');
        } catch (error) {
            console.error('Error updating room status:', error);
        }
    };
    


    return (
        <div style={{ marginTop: '690px', marginLeft: '260px', marginBottom: '100px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Available Rooms
            </Typography>
            <Grid container spacing={2}>
                {rooms.map((room) => (
                    <Grid key={room._id} item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Room {room.roomNo}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Floor {room.floorNo}
                                </Typography>
                                {room.status === 'available' && (
                                    <Button variant="contained" color="primary" onClick={() => handleBookNow(room)}>
                                        Book Now
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    {selectedRoom && (
                        <RoomBookingForm room={selectedRoom} onBookingSuccess={handleBookingSuccess} />
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default RoomList;
