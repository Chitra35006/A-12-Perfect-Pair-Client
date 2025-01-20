import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Provider/ThemeContext";

const PrimaryButton = ({ text, customClass }) => {
  // const { theme } = useContext(ThemeContext); // Access theme from context
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`text-base font-bold md:text-2xl md:px-6 px-4 py-3 md:py-4 rounded-lg transition-all duration-300 ${
        isHovered
          ? "bg-gradient-to-r from-green-500 to-lime-500 text-white"
          : "bg-gradient-to-r from-lime-400 to-green-500 text-black"
      } ${customClass}`}
      onMouseEnter={() => setIsHovered(true)} // Set hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
