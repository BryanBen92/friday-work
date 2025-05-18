import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.username || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await axios.post('http://localhost:5008/api/register', {
        username: formData.username,
        password: formData.password
      });
      
      // Redirect to login page after successful registration
      navigate('/');
    } catch (err) {
      console.error('Registration error:', err);
      alert(err.response?.data?.message || 'An error occurred during registration');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit">Sign Up</button>
        
        <div>
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Signup; 