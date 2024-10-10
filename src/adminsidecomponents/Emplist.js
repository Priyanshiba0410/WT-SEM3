import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Emplist.css'; // Import CSS file for styling

const Emplist = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [showModal, setShowModal] = useState(false); // Add showModal state

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleUpdateClick = (employee) => {
    setSelectedEmployee(employee);
    setIsUpdateMode(true);
    setShowModal(true); // Set showModal state to true
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleCancelClick = () => {
    setIsUpdateMode(false);
    setSelectedEmployee(null);
    setShowModal(false); // Close modal when canceled
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/employees/${selectedEmployee._id}`, selectedEmployee);
      // Update the employee list after successful update
      const updatedEmployees = employees.map((employee) =>
        employee._id === selectedEmployee._id ? selectedEmployee : employee
      );
      setEmployees(updatedEmployees);
      setIsUpdateMode(false);
      setSelectedEmployee(null);
      setShowModal(false); // Close modal after submitting
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedEmployee({ ...selectedEmployee, [name]: value });
  };

  return (
    <div className="employee-list-container temp2">
      <h2>Employee List : -</h2>
      <ul className="employee-list temp1">
        {employees.map((employee) => (
          <li key={employee._id} className="employee-item">
            <div className="employee-details">
              <p><strong>Employee ID:</strong> {employee.emp_id}</p>
              <p><strong>Name:</strong> {employee.empname}</p>
              <p><strong>Phone Number:</strong> {employee.phoneNumber}</p>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Category:</strong> {employee.category}</p>
              <p><strong>Salary:</strong> {employee.salary}</p>
              <p><strong>Joining Date:</strong> {employee.joiningdate}</p>
              <p><strong>Gender:</strong> {employee.gender}</p>
            </div>
            <div className="employee-actions">
              <button onClick={() => handleUpdateClick(employee)} className="update-btn">Update</button>
              <button onClick={() => handleDeleteClick(employee._id)} className="delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && ( // Show modal based on showModal state
        <div className="update-form-container temp">
          <h3>Update Employee</h3>
          <form onSubmit={handleSubmit} className="update-form">
            <input type="text" name="emp_id" value={selectedEmployee?.emp_id} onChange={handleChange} placeholder="Employee ID" required />
            <input type="text" name="empname" value={selectedEmployee?.empname} onChange={handleChange} placeholder="Employee Name" required />
            <input type="text" name="phoneNumber" value={selectedEmployee?.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
            <input type="email" name="email" value={selectedEmployee?.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="category" value={selectedEmployee?.category} onChange={handleChange} placeholder="Category" required />
            <input type="number" name="salary" value={selectedEmployee?.salary} onChange={handleChange} placeholder="Salary" required />
            <input type="date" name="joiningdate" value={selectedEmployee?.joiningdate} onChange={handleChange} placeholder="Joining Date" required />
            <label className="gender-label">
              Gender:
              <input type="radio" name="gender" value="Male" checked={selectedEmployee?.gender === 'Male'} onChange={handleChange} /> Male
              <input type="radio" name="gender" value="Female" checked={selectedEmployee?.gender === 'Female'} onChange={handleChange} /> Female
            </label>
            <button type="submit" className="submit-btn">Save Changes</button>
            <button onClick={handleCancelClick} className="cancel-btn">Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Emplist;
