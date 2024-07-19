import React, { useState } from "react";
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    registrationNumber: '',
    course: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., validation, API calls)
    console.log(formData); // For demo purposes
  };

  return (
    <div id="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group4">
          <label htmlFor="fullName">Full Name:</label>
          <input Type="text" Id="fullName" Name="fullName" Value={formData.fullName}
            onChange={handleChange} required
          />
        </div>
        <div className="form-group4">
          <label htmlFor="registrationNumber">Registration Number:</label>
          <input Type="text" Id="registrationNumber" Name="registrationNumber" Value={formData.registrationNumber}
            onChange={handleChange} required
          />
        </div>
        <div className="form-group4">
          <label htmlFor="course">Course:</label>
          <input Type="text" Id="course" Name="course" Value={formData.course}
            onChange={handleChange} required
          />
        </div>
        <div className="form-group4">
          <label htmlFor="username">Username:</label>
          <input Type="text" Id="username" Name="username" Value={formData.username}
            onChange={handleChange} required
          />
        </div>
        <div className="form-group4">
          <label htmlFor="password">Password:</label>
          <input Type="password" Id="password" Name="password" Value={formData.password}
            onChange={handleChange} required
          />
        </div>
        <div className="form-group4">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input Type="password" Id="confirmPassword" Name="confirmPassword" Value={formData.confirmPassword}
            onChange={handleChange} required
          />
        </div>
        
        <button id="submit">Register</button>
        
      </form>
    </div>
  );
};

export default SignUp


