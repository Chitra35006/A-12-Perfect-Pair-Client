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


//Drawer
// const [open, setOpen] = useState(false); // Drawer state

//     const toggleDrawer = () => {
//       setOpen(!open); // Toggle the sidebar
//     };

const DashBoard = () => {
 

  return (
    <div>
      <div className=" hidden lg:block">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
       

        {/* Navigation Links */}
        <ul
          className="menu p-4 space-y-4"// Show on mobile when isOpen is true
        >
          <li className="flex items-center space-x-2">
            <NavLink className="flex items-center space-x-2" to="/">
              <FaHome className="mr-2" />
              Home
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className="flex items-center space-x-2" to="/dashboard">
              <MdDashboard className="mr-2" /> Admin Dashboard
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className="flex items-center space-x-2" to="/dashboard/manageUsers">
              <FaUsers className="mr-2" /> Manage User
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className="flex items-center space-x-2" to="/dashboard/appPremium">
              <SiAdobepremierepro className="mr-2" /> Approved Premium
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className="flex items-center space-x-2" to="/dashboard/appContact">
              <RiContactsBookFill className="mr-2" /> Approved Contact Request
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className="flex items-center space-x-2" to="/dashboard/ssStory">
              <IoIosHeartHalf className="mr-2" /> Success Story
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className="flex items-center space-x-2" to="/dashboard/addEditBio">
              <PiReadCvLogoFill className="mr-2" /> Edit Biodata
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className="flex items-center space-x-2" to="/dashboard/viewBio">
              <FaBookReader className="mr-2" /> View Bio Data
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className="flex items-center space-x-2" to="/dashboard/myContactReq">
              <IoIosContacts className="mr-2" /> My Contact Request
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <NavLink className="flex items-center space-x-2" to="/dashboard/favBioData">
              <IoHeartCircleOutline className="mr-2" /> Favorite Biodata
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
    {/* <div className="md:hidden">
      <FavouriteBioData></FavouriteBioData>
    </div> */}
    </div>
    
    
  );
};

export default DashBoard;
