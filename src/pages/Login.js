import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // ⚠️ DEMO AUTHENTICATION LOGIC: Requires 'admin' and 'password'
    if (username === 'admin' && password === 'password') {
      console.log("Login successful! Redirecting...");
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
      // Alert matches the message shown in your screenshot
      alert('Invalid username or password. Use "admin" and "password" for demo.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>🏥 Admin Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        
        {/* Link to the Sign Up page */}
        <p className="auth-link-footer">
            Don't have an account? <Link to="/signup">Register Here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;