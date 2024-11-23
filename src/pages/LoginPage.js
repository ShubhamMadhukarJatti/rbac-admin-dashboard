import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple role-based check (you can modify this based on your needs)
    if (username === 'admin' && password === 'password') {
      navigate('/user-management'); // Redirect to User Management page
    } else if (username === 'manager' && password === 'password') {
      navigate('/role-management'); // Redirect to Role Management page
    } else {
      setError('Invalid username or password!');
    }
  };

  return (
    <div className="login-container">
      <h2>Please enter your credentials to log in.</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
