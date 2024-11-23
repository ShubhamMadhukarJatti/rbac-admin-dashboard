import React from 'react';
import './App.css';
import UserManagement from './components/UserManagement';  // Import the new component

function App() {
  return (
    <div className="App">
      <h1>RBAC Admin Dashboard</h1>
      <UserManagement /> {/* Include the UserManagement component */}
    </div>
  );
}

export default App;
