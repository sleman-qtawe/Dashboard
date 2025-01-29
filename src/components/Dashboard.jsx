import React from 'react';
import Navbar from './Navbar';

const Dashboard = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  );
};

export default Dashboard;