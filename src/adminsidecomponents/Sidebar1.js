// Sidebar.js

import React from 'react';
import './Sidebar1.css';
import { Link } from 'react-router-dom';
import personicon from '../assets/person.svg'
import dashbord from '../assets/dashbord.svg'
import users from '../assets/users.svg'
import employee from '../assets/emp.svg'
import addemp from '../assets/addemp.svg'
import food from '../assets/food.svg'
const Sidebar1 = () => {
  return (
    <div className="sidebar1">
      <div className="avatar1">
        <img src={personicon} style={{height:"30px"}}/>
      </div>
      <div className='name' style={{display:"flex",alignItems:"center",alignContent:"center",fontSize:"19px",marginLeft:"45px",fontWeight:"bold"}}>Admin</div>
      <ul className="menu">
        <li>
         <Link to='/admin'><img src={dashbord} style={{height:"20px",marginRight:"10px"}}/>Dashbord</Link>
        </li>
        <li>
          <Link to='/admin/room'><img src={users} style={{height:"20px",marginRight:"10px"}}/>users</Link>
        </li>   
        <li>
          <Link to='/admin/emp'><img src={employee} style={{height:"20px",marginRight:"10px"}}/>employee</Link>
        </li>
        <li>
         <Link to='/admin/addemp'><img src={addemp} style={{height:"20px",marginRight:"10px"}}/>add employee</Link>
        </li>
        <li>
         <Link to='/admin/food'><img src={food} style={{height:"20px",marginRight:"10px"}}/>post food-menu</Link>
        </li>
        <li>
         <Link to='/admin/foodmenu'><img src={food} style={{height:"20px",marginRight:"10px"}}/>food-menu</Link>
        </li>
        <li>
         <Link to='/admin/userfeedback'><img src={personicon} style={{height:"20px",marginRight:"10px"}}/>user feedback</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar1;
