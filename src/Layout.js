// Layout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Sidebar from './components/Sidebar';
import './Layout.css'
import { Footer } from './components/Footer';
const Layout = () => {
  return (
    <>
      <div className='row'>
        <div className='col'><Navbar /></div>
        </div>
        <div className='row'>
          <div className='col-2 sidebar'>
          <Sidebar />
          </div>
          <div className='col temp'>
          <Outlet />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
          <div className='footer'><Footer/></div>
          </div>
        </div>
  
      </>
   
  );
};

export default Layout;
