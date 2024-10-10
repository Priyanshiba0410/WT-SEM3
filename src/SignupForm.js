import React, { useState } from 'react';
import './SignupForm.css';
import {useNavigate} from 'react-router-dom'; // Import your CSS file for styling
import swal from 'sweetalert';
const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      navigate('/home', { replace: false });
      swal("", "sign up successfully", "success");
    } catch (error) {
      console.error('Error:', error);
      swal("", "Login faild", "error");
      // Handle error
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form"> 
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>
        <button onClick={handleSubmit} className="btn" style={{background:'orange'}}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
