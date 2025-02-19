import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { UserOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useTheme } from "../../../Provider/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import OutLineButton from "../../../Pages/Buttons/OutLineButton";
import "animate.css";
import useAuth from "../../../hooks/useAuth";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton";
import { Avatar, Tooltip } from "@mui/material";
import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 const [isAdmin] = useAdmin();
 console.log(isAdmin);
  // Toggle the mobile menu
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const { theme, toggleTheme } = useTheme();
  const { user, logOut } = useAuth();
  // console.log(user);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li className="hover:text-lime-400">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-bold border-b-4 pb-1 border-green-700"
              : "text-gray-500 hover:text-lime-500"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-lime-400">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-bold border-b-4 pb-1 border-green-700"
              : "text-gray-500 hover:text-lime-500"
          }
          to="/bioData"
        >
          Biodata
        </NavLink>
      </li>
      <li className="hover:text-lime-400">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-bold border-b-4 pb-1 border-green-700"
              : "text-gray-500 hover:text-lime-500"
          }
          to="/aboutUs"
        >
          About Us
        </NavLink>
      </li>
      <li className="hover:text-lime-400">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lime-400 font-bold border-b-4 pb-1 border-green-700"
              : "text-gray-500 hover:text-lime-500"
          }
          to="/contactUs"
        >
          Contact Us
        </NavLink>
      </li>
      {
            user && isAdmin && <li className="text-gray-500 hover:text-lime-500"><Link to="/dashboard/adminDashboard">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li className="text-gray-500 hover:text-lime-500"><Link to="/dashboard/addEditBio">Dashboard</Link></li>
        }
    </>
  );
  return (
    <div className="">
      <Layout>
        <Header
          className={`${
            theme === "dark" ? "bg-slate-900" : "bg-white"
          } shadow-md fixed top-0 left-0 w-full z-50`}
        >
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold">
              <a
                href="/"
                className="text-gray-800 flex items-center md:text-2xl text-xl"
              >
                <img
                  className="w-10 mr-2 animate-pulse"
                  src={logo}
                  alt="Logo"
                />{" "}
                <h1
                  className={`${
                    theme === "dark" ? "text-gray-200" : "text-black"
                  } animate__animated animate__bounce my-2`}
                  style={{
                    animationIterationCount: 2, // Run the animation only once
                  }}
                >
                  <span className="text-lime-500">P</span>erfect{" "}
                  <span className="text-lime-500">P</span>air
                </h1>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal space-x-6 pt-3 font-medium text-lg flex">
                {links}
              </ul>
            </div>

            {/* Right Side */}
            <div className="flex justify-center items-center gap-3">
              <button
                onClick={toggleTheme}
                className="btn btn-ghost rounded-full"
              >
                {theme === "dark" ? (
                  <FaSun
                    className={`${
                      theme === "dark" ? "text-gray-200" : "text-black"
                    }`}
                  />
                ) : (
                  <FaMoon
                    className={`${
                      theme === "dark" ? "text-gray-200" : "text-black"
                    }`}
                  />
                )}
              </button>

              {user ? (
                <>
                  <Tooltip title={user?.displayName || "User"} arrow>
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-12 h-12 hidden lg:block border-2 border-lime-400 object-cover rounded-full"
                      />
                    ) : (
                      /* Show default avatar when photoURL is not available */
                      <Avatar
                        className="bg-lime-300 border-2 border-lime-500 rounded-full  w-12 h-12"
                        icon={<UserOutlined />}
                      />
                    )}
                  </Tooltip>
                </>
              ) : (
                <>
                  {/* Default avatar for non-logged-in users */}
                  <Avatar
                    className="bg-lime-500 pt-2 w-12 h-12 hidden lg:block"
                    icon={<UserOutlined />}
                  />
                </>
              )}

              {user ? (
                <>
                  <SecondaryButton
                    onClick={handleLogout}
                    text={"LOGOUT"}
                    customClass="hidden lg:block"
                  ></SecondaryButton>
                </>
              ) : (
                <>
                  <Link className="hidden lg:block" to="/login">
                    <OutLineButton text="LOGIN" />
                  </Link>
                </>
              )}
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
          >
            {" "}
            {user ? (
              <>
                <Tooltip title={user?.displayName || "User"} arrow>
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-12 h-12 border-2 my-2 border-lime-400 object-cover rounded-full"
                    />
                  ) : (
                    /* Show default avatar when photoURL is not available */
                    <Avatar
                      className="bg-lime-500 w-12 h-12 my-2"
                      icon={<UserOutlined />}
                    />
                  )}
                </Tooltip>
              </>
            ) : (
              <>
                {/* Default avatar for non-logged-in users */}
                <Avatar
                  className="bg-lime-500 w-12 h-12 my-2"
                  icon={<UserOutlined />}
                />
              </>
            )}
            {user ? (
              <>
                <SecondaryButton
                  onClick={handleLogout}
                  text={"LOGOUT"}
                ></SecondaryButton>
              </>
            ) : (
              <>
                <Link className="hidden lg:block my-2" to="/login">
                  <OutLineButton text="LOGIN" />
                </Link>
              </>
            )}
            <div>
              <ul className="menu menu-horizontal space-x-4 font-medium text-lg flex flex-col">
                {links}
              </ul>
            </div>
          </Drawer>
        </Header>
      </Layout>
    </div>
  );
};

export default NavBar;
