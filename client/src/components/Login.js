import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
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
      const response = await axios.post('http://localhost:5008/api/login', formData);
      const { token } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('token', token);
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      alert(err.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        
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
        
        <button type="submit">Login</button>
        
        <div>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login; 