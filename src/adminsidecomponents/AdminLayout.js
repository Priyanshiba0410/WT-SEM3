import React from 'react'
import {Navbar1} from './Navbar1'
import Sidebar1 from './Sidebar1'
import {Outlet} from 'react-router-dom'
export const AdminLayout = () => {
  return (
    <>
     <div className='row'>
      <div className='col'>
        <Navbar1/>
      </div>
     </div>
     <div className='row'>
      <div className='col-2'>
        <Sidebar1/>
      </div>
      <div className='col'>
          <Outlet/>
      </div>
     </div>
    </>
  )
}
