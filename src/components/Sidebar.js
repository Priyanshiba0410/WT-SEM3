// Sidebar.js

import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import bedicon from '../assets/bed.svg'
import personicon from '../assets/person.svg'
import yourbook from '../assets/yourbook.svg'
import food from '../assets/food.svg'
import service from '../assets/services.svg'
import special from '../assets/special.svg'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="avatar">
        <img src={personicon} style={{height:"30px"}}/>
      </div>
      <div className='name'>user name :</div>
      <ul className="menu">
        <li>
         <Link to='/home'><img src={bedicon} style={{height:"20px",marginRight:"10px"}}/>Home</Link>
        </li>
        <li>
          <Link to='/home/room'><img src={bedicon} style={{height:"20px",marginRight:"10px"}}/>room booking</Link>
        </li>
        <li>
          <Link to='/home/roomdata'><img src={yourbook} style={{height:"20px",marginRight:"10px"}}/>    Your booking</Link>
        </li>
        <li>
         <Link to='/home/services'><img src={service} style={{height:"20px",marginRight:"10px"}}/>Services</Link>
        </li>
        <li>
         <Link to='/home/food'><img src={food} style={{height:"20px",marginRight:"10px"}}/>food menu</Link>
        </li>
      
        
        <li>
         <Link to='/home/special'><img src={special} style={{height:"20px",marginRight:"10px"}}/>special services</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
