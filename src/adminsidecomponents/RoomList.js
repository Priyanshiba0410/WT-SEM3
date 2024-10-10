import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, Card, CardContent, Button, makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '300px',
    margin: '10px',
    padding: '10px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    minHeight: '300px', // Set a minimum height for the card
  },
  content: {
    flex: '1 0 auto',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
}));

const RoomList = () => {
  const classes = useStyles();
  const [bookedRooms, setBookedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookedRooms();
  }, []);

  const fetchBookedRooms = async () => {
    try {
      const response = await axios.get('http://localhost:5000/rooms/booked');
      setBookedRooms(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleApprove = async (roomId) => {
    try {
      await axios.put(`http://localhost:5000/api/rooms/${roomId}`, { status: 'approved' });
      updateRoomStatus(roomId, 'approved');
    } catch (error) {
      console.error('Error approving room:', error);
    }
  };

  const handleCancel = async (roomId) => {
    try {
      await axios.put(`http://localhost:5000/api/rooms/${roomId}`, { status: 'rejected' });
      updateRoomStatus(roomId, 'cancelled');
    } catch (error) {
      console.error('Error cancelling room:', error);
    }
  };

  const updateRoomStatus = (roomId, newStatus) => {
    setBookedRooms(prevRooms =>
      prevRooms.map(room => (room._id === roomId ? { ...room, status: newStatus } : room))
    );
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Booked Room Details
      </Typography>
      {loading ? (
        <CircularProgress style={{ margin: 'auto' }} />
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {bookedRooms.map(room => (
            <Grid key={room._id} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography variant="h6" gutterBottom>
                    Room Name: {room.name}
                  </Typography>
                  <Typography>Room No: {room.roomNo}</Typography>
                  <Typography>Floor No: {room.floorNo}</Typography>
                  <Typography>Check-in Date: {new Date(room.checkInDate).toLocaleDateString()}</Typography>
                  <Typography>Check-out Date: {new Date(room.checkOutDate).toLocaleDateString()}</Typography>
                  <Typography>Status: {room.status}</Typography>
                </CardContent>
                {room.status === 'pending' && (
                  <div className={classes.buttonContainer}>
                    <Button variant="contained" color="primary" onClick={() => handleApprove(room.roomNo)}>Approve</Button>
                    <Button variant="contained" color="secondary" onClick={() => handleCancel(room.roomNo)}>Cancel</Button>
                  </div>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default RoomList;
