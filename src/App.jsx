import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Teacher from './components/Teacher';
import Students from './components/Students';

function App() {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [isSidebarOpen, setIsSidebarOpen] = useState(isLargeScreen);

  useEffect(() => {
    setIsSidebarOpen(isLargeScreen);
  }, [isLargeScreen]);

  return (
    <Router>
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64 ml-0' : 'ml-0'}`}>
          <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
