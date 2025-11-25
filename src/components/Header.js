import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any user tokens/data here
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header className="header">
      <h1>Hospital Admin Dashboard</h1>
      <div className="user-profile">
        <span>Admin Profile</span>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;