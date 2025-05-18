import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first');
      navigate('/');
      return;
    }

    // Fetch protected data
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5008/api/protected', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (err) {
        console.error('Error fetching protected data:', err);
        alert('Session expired. Please login again.');
        localStorage.removeItem('token');
        navigate('/');
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      {/* <p>{userData.message}</p> */}
      {/* <p>Logged in as: {userData.user.username}</p> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard; 