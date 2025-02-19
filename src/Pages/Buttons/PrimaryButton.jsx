import React, { useState } from "react";

const PrimaryButton = ({ text, customClass, textSize = "text-base" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`font-bold text-black px-4 py-3 md:px-6 md:py-4 rounded-lg transition-all duration-300 ${
        isHovered
          ? "bg-gradient-to-r from-green-500 to-lime-500 "
          : "bg-gradient-to-r from-lime-400 to-green-500 "
      } ${textSize} ${customClass}`}  // Apply textSize dynamically
      onMouseEnter={() => setIsHovered(true)}  // Set hover state
      onMouseLeave={() => setIsHovered(false)}  // Reset hover state
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
