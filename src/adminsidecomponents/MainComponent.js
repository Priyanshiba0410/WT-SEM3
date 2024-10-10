import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoomList from './RoomList';

const MainComponent = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []); // Empty dependency array to fetch rooms only once on component mount

  return (
    <div>
      <h1 style={{marginTop:'80px'}}>All Rooms : -</h1>
      <div style={{display:"inline"}}>
        <RoomList rooms={rooms} />
      </div>
    </div>
  );
};

export default MainComponent;
