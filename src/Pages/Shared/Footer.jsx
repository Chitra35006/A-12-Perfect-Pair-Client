import { useTheme } from "@emotion/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";


const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="border-none md:border-dashed md:border-lime-400 md:border-x-2 container mx-auto px-6 py-10 bg-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-center mb-4">
        {/* Brand Section */}
        <div className="text-xl font-bold">
          <a href="/" className="text-gray-800 flex items-center text-2xl">
            <img className="w-10 mr-2" src={logo} alt="Logo" />{" "}
            <h1 className="text-gray-300">
              <span className="text-lime-500">P</span>erfect{" "}
              <span className="text-lime-500">P</span>air
            </h1>
          </a>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="flex justify-center items-center space-x-6 my-6 md:mt-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors border-dashed border-2 border-blue-500 p-4"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors border-dashed border-2 border-blue-400 p-4"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors border-dashed border-2 border-pink-400 p-4"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-700 transition-colors border-dashed border-2 border-blue-700 p-4"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      {/* Divider */}
      <hr className="my-6  border-lime-400 border-double" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Links */}
        <div className="flex space-x-4 text-sm">
          <a
            href="/about"
            className="text-lime-400 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="/services"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-lime-400 hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="/services"
            className="text-gray-400 hover:text-white transition-colors"
          >Subscribe</a>
        </div>
        {/* email field */}
        

      {/* Input Field */}
      


          
        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-4 md:mt-0">
          © 2025 <span className="text-lime-400">Perfect Pair</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
