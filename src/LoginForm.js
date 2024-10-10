// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginForm.css'; // Import your CSS file for styling

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       })

//       if (!response.ok) {
//         throw new Error('Failed to login');
//       }

//       const data = await response.json();
//       console.log(data);
//       navigate('/home', { replace: false });
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error
//     }
//   };

//   return (
//     <div className="login-container">
//       <form  className="login-form">
//         <h2>Login</h2>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             minLength={6}
//             required
//           />
//         </div>
//         <button onClick={handleSubmit} className="btn">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import your CSS file for styling
import swal from 'sweetalert';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status here
    const isAuthenticated = handleSubmit;
    if (isAuthenticated) {
      // navigate('/home');
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      console.log(data);
      if(email ==='admin123@gmail.com' && password ==='admin123'){
        navigate('/admin')
      }
      navigate('/home');
      swal("", "Login successfully", "success");
    } catch (error) {
      console.error('Error:', error);
      swal("", "Login faild", "error");
      // Handle error
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
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
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
