import React, { useState } from 'react'; 
import { FaHome, FaUserPlus, FaUsers, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'; 

const Sidebar = ({ isSidebarOpen ,setIsSidebarOpen}) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1023 }); 
  const handleLinkClick = () => {
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    }
  };
  return (
    <div className={`${isSidebarOpen ? 'block' : 'hidden'} w-64 bg-gray-600 fixed h-full px-4 py-2`}>
      <div className='my-2 mb-4'>
        <h1 className='text-2xl text-white font-bold'  >Admin Drive School</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-orange-500 py-2 cursor-pointer'>
          <Link to="/home" className='px-3 flex items-center' onClick={handleLinkClick} >
            <FaHome className='inline-block w-6 h-6 mr-2'  />
            Home
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-orange-500 py-2 cursor-pointer'>
          <Link to="/teacher" className='px-3 flex items-center' onClick={handleLinkClick}>
            <FaUserPlus className='inline-block w-6 h-6 mr-2' />
            Teacher
          </Link>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-orange-500 py-2 cursor-pointer'>
          <Link to="/students" className='px-3 flex items-center' onClick={handleLinkClick}>
            <FaUsers className='inline-block w-6 h-6 mr-2' />
            Students
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;