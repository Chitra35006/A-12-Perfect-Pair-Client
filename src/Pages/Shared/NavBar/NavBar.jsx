import React, { useState } from "react";
import { Layout, Menu, Avatar, Drawer, Button } from "antd";
import { UserOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useTheme } from "../../../Provider/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import OutLineButton from "../../../Pages/Buttons/OutLineButton";
import "animate.css";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle the mobile menu
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const { theme, toggleTheme } = useTheme();
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
    </>
  );
  return (
    <div className="">
      <Layout>
        <Header
          className={`${
            theme === "dark" ? "bg-slate-800" : "bg-white"
          } shadow-md fixed top-0 left-0 w-full z-50`}
        >
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold">
              <a
                href="/"
                className="text-gray-800 flex items-center md:text-2xl text-xl"
              >
                <img className="w-10 mr-2 animate-pulse" src={logo} alt="Logo" />{" "}
                <h1
                  className={`${
                    theme === "dark" ? "text-gray-200" : "text-black"
                  } animate__animated animate__bounce`}
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
            <div className="flex items-center gap-3">
              <Link className="hidden lg:block" to="/login">
                <OutLineButton text="LOGIN" />
              </Link>

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

              <Avatar
                className="hidden lg:block bg-lime-500"
                icon={<UserOutlined />}
              />
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
            <Avatar className=" bg-lime-500" icon={<UserOutlined />} />
            <Link className="ml-4" to="/login">
              <OutLineButton text="LOGIN" />
            </Link>
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
