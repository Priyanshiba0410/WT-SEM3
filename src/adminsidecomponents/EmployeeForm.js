import React, { useState } from 'react';
import axios from 'axios';
import './EmpForm.css'; // Import CSS file for styling

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    emp_id: '',
    empname: '',
    phoneNumber: '',
    email: '',
    password: '',
    category: '',
    salary: '',
    joiningdate: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/employees', employeeData);
      console.log(response.data);
      // Reset form fields after successful submission
      setEmployeeData({
        emp_id: '',
        empname: '',
        phoneNumber: '',
        email: '',
        password: '',
        category: '',
        salary: '',
        joiningdate: '',
        gender: '',
      });
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <input type="text" name="emp_id" value={employeeData.emp_id} onChange={handleChange} placeholder="Employee ID" required />
        <input type="text" name="empname" value={employeeData.empname} onChange={handleChange} placeholder="Employee Name" required />
        <input type="text" name="phoneNumber" value={employeeData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
        <input type="email" name="email" value={employeeData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={employeeData.password} onChange={handleChange} placeholder="Password" required />
        <select name="category" value={employeeData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Manager">Manager</option>
          <option value="Supervisor">Supervisor</option>
          <option value="Employee">Employee</option>
        </select>
        <input type="number" name="salary" value={employeeData.salary} onChange={handleChange} placeholder="Salary" required />
        <input type="date" name="joiningdate" value={employeeData.joiningdate} onChange={handleChange} placeholder="Joining Date" required />
        <label className="gender-label">
          Gender:
          <input type="radio" name="gender" value="Male" checked={employeeData.gender === 'Male'} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female" checked={employeeData.gender === 'Female'} onChange={handleChange} /> Female
        </label>
        <button type="submit" className="submit-btn">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
