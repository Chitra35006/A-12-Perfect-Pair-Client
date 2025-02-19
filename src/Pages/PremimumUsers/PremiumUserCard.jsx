import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { UserOutlined, CalendarOutlined, SolutionOutlined, ArrowRightOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { motion } from "framer-motion"; // Import motion from framer-motion

const PremiumUserCard = ({ premiumBiodata }) => {
  const { theme } = useTheme();
  const { id, gender, _id, photo, permanentDivision, userAge, occupation } = premiumBiodata;

  // Normalize gender value to lowercase
  const normalizedGender = gender?.toLowerCase()?.trim();

  let contentBackground, imgBorderColor;

  // Determine background and border colors based on normalized gender
  if (normalizedGender === "male") {
    contentBackground = "bg-gradient-to-r from-blue-100 via-blue-200 to-teal-200"; // Blue gradient for Male
    imgBorderColor = "border-4 border-teal-600"; // Solid blue border for Male
  } else if (normalizedGender === "female") {
    contentBackground = "bg-gradient-to-r from-pink-100 via-pink-200 to-violet-300"; // Pink gradient for Female
    imgBorderColor = "border-4 border-violet-400"; // Solid pink border for Female
  } else {
    contentBackground = "bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600"; // Indigo gradient for other genders
    imgBorderColor = "border-4 border-indigo-500"; // Solid indigo border for other genders
  }

  // Floating text class
  const floatingClass = "absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-lg";

  // Scroll detection logic
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const rect = document.getElementById(_id)?.getBoundingClientRect();
    if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Continuous animation when scrolling
  const motionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 50,
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      id={_id}
      className={`p-4 rounded-lg border-2 shadow-lg hover:shadow-xl ${
        theme === "dark" ? "bg-slate-950 border-gray-700" : "bg-white border-gray-100"
      }`}
      initial={motionVariants.initial}
      animate={motionVariants.animate}
      transition={motionVariants.transition}
    >
      {/* Image container with dynamic border */}
      <div className={`relative rounded-xl overflow-hidden mb-4 ${imgBorderColor}`}>
        <img src={photo} alt={`${id}-photo`} className="w-full h-48 object-cover" />
        <div className={`${floatingClass} left-2`}>ID: {id}</div>
      </div>

      {/* Content with dynamic background */}
      <div className={`py-4 font-semibold px-8 ${contentBackground} rounded-bl-[80px] rounded-tr-[40px]`}>
        <p className="flex items-center">
          <UserOutlined className="mr-2" />
          <span>{gender}</span>
        </p>
        <p className="flex items-center">
          <CalendarOutlined className="mr-2" />
          <span>Age: {userAge}</span>
        </p>
        <p className="flex items-center">
          <SolutionOutlined className="mr-2" />
          <span>Occupation: {occupation}</span>
        </p>
        <p className="flex items-center">
          <EnvironmentOutlined className="mr-2" />
          <span>Division: {permanentDivision}</span>
        </p>
      </div>

      {/* Button */}
      <div className="w-full">
        <Link to={`/allBiodataDetails/${_id}`}>
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
            View Profile
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PremiumUserCard;
