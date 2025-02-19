import React from "react";
import { Helmet } from "react-helmet";
import { Form, Input, Button } from "antd";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import {ArrowRightOutlined } from "@ant-design/icons";

const ContactUs = () => {
  const { theme } = useTheme();

  return (
    <div className={`py-16 my-10 px-6 md:px-16 lg:px-24 min-h-screen ${theme === "dark" ? "bg-gray-950 text-gray-300" : "bg-gray-100 text-gray-800"}`}>
      <Helmet>
        <title>Perfect Pair | Contact Us</title>
      </Helmet>

     

      <div className="flex flex-col md:flex-row gap-10 mt-10">
        {/* Contact Info */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-lime-500 text-2xl" />
            <p>+880 123 456 789</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <p>support@perfectpair.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <p>Sylhet, Bangladesh</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <Form layout="vertical">
            <Form.Item label={<span className={theme === "dark" ? "text-gray-300" : "text-gray-800"}>Name</span>} className="rounded-2xl px-4">
              <Input placeholder="Enter your name" className="py-2 px-4 border-gray-400 dark:bg-gray-900 dark:text-white" />
            </Form.Item>

            <Form.Item label={<span className={theme === "dark" ? "text-gray-300" : "text-gray-800"}>Email</span>} className="rounded-2xl px-4">
              <Input type="email" placeholder="Enter your email" className="py-2 px-4 border-gray-400 dark:bg-gray-900 dark:text-white" />
            </Form.Item>

            <Form.Item label={<span className={theme === "dark" ? "text-gray-300" : "text-gray-800"}>Message</span>} className="rounded-2xl px-4">
              <Input.TextArea rows={4} placeholder="Enter your message" className="py-2 px-4 border-gray-400 dark:bg-gray-900 dark:text-white" />
            </Form.Item>

                  <Button
             className="w-full font-bold border-b-4 rounded-md transition-all duration-300
                        border-lime-400 text-green-800 bg-transparent 
                        dark:text-white dark:border-teal-500"
             icon={<ArrowRightOutlined />}
             style={{
               transition: "all 0.3s ease",
             }}
             onMouseOver={(e) => {
               e.currentTarget.style.backgroundColor = "teal";
               e.currentTarget.style.color = "white";
               e.currentTarget.style.borderBottom = "4px solid teal";
             }}
             onMouseOut={(e) => {
               e.currentTarget.style.backgroundColor = "transparent";
               e.currentTarget.style.color = document.documentElement.classList.contains("dark")
                 ? "white" // White text in dark mode
                 : "#365314"; // Green text in light mode
               e.currentTarget.style.borderBottom = document.documentElement.classList.contains("dark")
                 ? "4px solid teal"
                 : "4px solid #84cc16";
             }}
           >
             Send Message
           </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
