import React, { useState } from 'react';

const SecondaryButton = ({ text, children, onClick, customClass }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`text-base font-bold md:text-lg md:px-6 px-4 py-3 md:py-2 rounded-lg transition-all duration-300 ${
        isHovered
          ? "bg-gradient-to-r from-green-500 to-lime-500 text-white"
          : "bg-gradient-to-r from-lime-400 to-green-500 text-black"
      } ${customClass}`} // Ensure there's a space between the dynamic classes and customClass
      onMouseEnter={() => setIsHovered(true)} // Set hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
};


export default SecondaryButton;