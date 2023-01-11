import React from 'react';
import Dashboard from '../dashboard/Dashboard';
import Menu from '../menu/Menu';
import './App.css';
function App() {
  return (
    <div className="wrapper">
      <Menu />
      <Dashboard />
    </div>
  );
}

export default App;
