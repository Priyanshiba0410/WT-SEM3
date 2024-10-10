/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src='https://orig00.deviantart.net/0f88/f/2013/079/5/3/royal_hotel_logo_by_in_line-d5ynx9y.jpg' alt="Company Logo" />
          <span className="company-name">Royal H5</span>
        </div>
        <div className="navbar-feedback">
          {/* Use Link to navigate to the /feedback route */}
          <Link to="/feedback" className="feedback-link">Feedback</Link>
          <i className="fa fa-comments"></i>
        </div>
      </div>
    </nav>
  )
}
