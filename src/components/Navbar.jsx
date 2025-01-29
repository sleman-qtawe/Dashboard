import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/home':
        return 'Home';
      case '/teacher':
        return 'Teacher';
      case '/students':
        return 'Students';
      default:
        return 'Home';
    }
  };

  return (
    <div className='bg-gray-600 px-4 py-3 flex justify-between items-center'>
      <div className='flex items-center text-xl'>
        <button onClick={() => setIsSidebarOpen(prev => !prev)} className="text-white me-4 cursor-pointer focus:outline-none">
          <FaBars />
        </button>
        <span className='text-white font-semibold'>Dashboard - {getPageTitle()}</span>
      </div>
    </div>
  );
};

export default Navbar;
