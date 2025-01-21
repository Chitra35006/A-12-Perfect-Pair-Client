import { FaHome, FaUsers, FaBookReader } from "react-icons/fa";  // Updated import
import { MdDashboard } from "react-icons/md";
import { SiAdobepremierepro } from "react-icons/si";
import { RiContactsBookFill } from "react-icons/ri";
import { IoIosHeartHalf } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { IoIosContacts } from "react-icons/io";
import { IoHeartCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar visibility
  };

  return (
    <div>
      <Helmet><title>Perfect Pair | Dashboard</title></Helmet>
      <div className="flex">
        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden fixed bottom-[200px] left-4 z-20 bg-teal-500 text-white p-3 rounded-full"
          onClick={toggleSidebar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Sidebar */}
        <div 
          className={`fixed top-0 left-0 z-10 w-64 min-h-screen bg-[linear-gradient(25deg,#99f6e4_5%,_white_40%,_white_40%,#d9f99d_100%)] border-b-4 rounded-r-[80px] rounded-bl-[80px] rounded-br-[30px] border-r-4 border-[#14b8a6] 
            ${isSidebarOpen ? 'block' : 'hidden'} md:block`}
        >
           {/* Navigation Links */}
        <ul
          className="menu p-4 space-y-4 text-green-900"// Show on mobile when isOpen is true
        >
          <li className="flex items-center space-x-2">
            <NavLink className={({ isActive }) => 
    isActive ? 'flex items-center space-x-2 text-indigo-900 font-bold bg-lime-400 px-4 py-2 rounded-lg' : 'flex items-center space-x-2 text-green-900'
  } to="/">
              <FaHome className="mr-2" />
              Home
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className={({ isActive }) => 
    isActive ? 'flex items-center space-x-2 text-indigo-900 font-bold bg-lime-400 px-4 py-2 rounded-lg' : 'flex items-center space-x-2 text-green-900'
  } to="/dashboard">
              <MdDashboard className="mr-2" /> Admin Dashboard
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className={({ isActive }) => 
    isActive ? 'flex items-center space-x-2 text-indigo-900 font-bold bg-lime-400 px-4 py-2 rounded-lg' : 'flex items-center space-x-2 text-green-900'
  } to="/dashboard/manageUsers">
              <FaUsers className="mr-2" /> Manage User
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className={({ isActive }) => 
    isActive ? 'flex items-center space-x-2 text-indigo-900 font-bold bg-lime-400 px-4 py-2 rounded-lg' : 'flex items-center space-x-2 text-green-900'
  } to="/dashboard/appPremium">
              <SiAdobepremierepro className="mr-2" /> Approved Premium
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className={({ isActive }) => 
    isActive ? 'flex items-center space-x-2 text-indigo-900 font-bold bg-lime-400 px-4 py-2 rounded-lg' : 'flex items-center space-x-2 text-green-900'
  } to="/dashboard/appContact">
              <RiContactsBookFill className="mr-2" /> Approved Contact Request
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className={({ isActive }) => 
    isActive ? 'flex items-center space-x-2 text-indigo-900 font-bold bg-lime-400 px-4 py-2 rounded-lg' : 'flex items-center space-x-2 text-green-900'
  } to="/dashboard/ssStory">
              <IoIosHeartHalf className="mr-2" /> Success Story
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className={({ isActive }) => 
    isActive ? 'flex items-center space-x-2 text-indigo-900 font-bold bg-lime-400 px-4 py-2 rounded-lg' : 'flex items-center space-x-2 text-green-900'
  } to="/dashboard/addEditBio">
              <PiReadCvLogoFill className="mr-2" /> Edit Biodata
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className={({ isActive }) => 
    isActive ? 'flex items-center space-x-2 text-indigo-900 font-bold bg-lime-400 px-4 py-2 rounded-lg' : 'flex items-center space-x-2 text-green-900'
  } to="/dashboard/viewBio">
              <FaBookReader className="mr-2" /> View Bio Data
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className={({ isActive }) => 
    isActive ? 'flex items-center space-x-2 text-indigo-900 font-bold bg-lime-400 px-4 py-2 rounded-lg' : 'flex items-center space-x-2 text-green-900'
  } to="/dashboard/myContactReq">
              <IoIosContacts className="mr-2" /> My Contact Request
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className={({ isActive }) => 
    isActive ? 'flex items-center space-x-2 text-indigo-900 font-bold bg-lime-400 px-4 py-2 rounded-lg' : 'flex items-center space-x-2 text-green-900'
  } to="/dashboard/favBioData">
              <IoHeartCircleOutline className="mr-2" /> Favorite Biodata
            </NavLink>
          </li>
        </ul>
        </div>

        {/* Content */}
        <div className="flex-1 md:overflow-y-auto md:ml-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
