import React, { useState } from 'react';

const SecondaryButton = ({text,children,onClick }) => {
     const [isHovered, setIsHovered] = useState(false);
    return (
        <button
        className={`text-base font-bold md:text-lg md:px-6 px-4 py-3 md:py-2 rounded-lg transition-all duration-300 ${
          isHovered
            ? "bg-gradient-to-r from-green-500 to-lime-500 text-white"
            : "bg-gradient-to-r from-lime-400 to-green-500 text-black"
        }`}
        onMouseEnter={() => setIsHovered(true)} // Set hover state
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}  // Reset hover state
      > {children}
        {text}
      </button>
    );
};

export default SecondaryButton;