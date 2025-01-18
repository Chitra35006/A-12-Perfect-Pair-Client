import React, { useState } from "react";
import { Layout, Menu, Avatar, Drawer, Button } from "antd";
import { UserOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { useTheme } from "../../../Provider/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const NavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle the mobile menu
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const {theme, toggleTheme} = useTheme();
  const links = <>
              <li className="hover:text-lime-400"><NavLink className={({ isActive }) => isActive ? "text-lime-400 font-bold border-b-4 pb-1 border-green-700" : "text-gray-500 hover:text-lime-500"} to="/" >Home</NavLink></li>
              <li className="hover:text-lime-400"><NavLink className={({ isActive }) => isActive ? "text-lime-400 font-bold border-b-4 pb-1 border-green-700" : "text-gray-500 hover:text-lime-500"} to="/bioData" >BioDatas</NavLink></li>
              <li className="hover:text-lime-400"><NavLink className={({ isActive }) => isActive ? "text-lime-400 font-bold border-b-4 pb-1 border-green-700" : "text-gray-500 hover:text-lime-500"} to="/aboutUs" >About Us</NavLink></li>
              <li className="hover:text-lime-400"><NavLink className={({ isActive }) => isActive ? "text-lime-400 font-bold border-b-4 pb-1 border-green-700" : "text-gray-500 hover:text-lime-500"} to="/contactUs" >Contact Us</NavLink></li>
              <li className="hover:text-lime-400"><NavLink className={({ isActive }) => isActive ? "text-lime-400 font-bold border-b-4 pb-1 border-green-700" : "text-gray-500 hover:text-lime-500"} to="/login" >Login</NavLink></li>
             

      
    </>
    return (
        <Layout>
        <Header className={`${theme=== "dark" ?"bg-slate-800":"bg-white"} shadow-md`}>
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold">
              <a href="/" className="text-gray-800 flex items-center text-2xl">
              <img className="w-10 mr-2" src={logo} alt="Logo" />{" "}
              <h1 className={`${theme ==="dark"? "text-gray-200":"text-black"}`}><span className="text-lime-500">P</span>erfect <span className="text-lime-500">P</span>air</h1>
              </a>
            </div>
  
            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 font-medium text-lg flex">{links}</ul>
         </div>
  
            {/* Right Side */}
            <div className=" flex gap-3">
            <button onClick={toggleTheme} className="btn btn-ghost rounded-full">
            {theme === "dark" ? <FaSun className={`${theme ==="dark"? "text-gray-200":"text-black"}`} /> : <FaMoon  className={`${theme ==="dark"? "text-gray-200":"text-black"}`}/>}
        </button>
              <Avatar className=" hidden lg:block bg-lime-500" icon={<UserOutlined />} />
            </div>
  
            {/* Mobile Menu (Hamburger Icon) */}
            <div className="md:hidden">
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={toggleDrawer}
                className="text-2xl"
              />
            </div>
          </div>
  
          {/* Mobile Drawer */}
          <Drawer
            title="Perfect Pair"
            placement="right"
            onClose={toggleDrawer}
            open={isDrawerOpen}
            closeIcon={<CloseOutlined />}
            
          > <Avatar className=" bg-lime-500" icon={<UserOutlined />} />
             <ul className="menu menu-horizontal space-x-4 font-medium text-lg flex flex-col">
                {links}
            </ul>
          </Drawer>
        </Header>
      </Layout>
    );
};

export default NavBar;