import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Provider/ThemeContext';
import { Button } from 'antd';

const PrimaryButton = ({text}) => {
    const { theme } = useContext(ThemeContext); // Access theme from your context
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Button
      className="text-base text-black md:text-2xl md:px-6 px-2 py-6 md:py-8 border-none font-bold bg-gradient-to-r from-lime-400 via-lime-500 to-green-700"
      style={{
        color: isHovered ? '#fff' : '#000', // Keep text color black
        borderColor: '#a3e635', // Consistent border color
        background: isHovered
          ? 'linear-gradient(to right, #4CAF50, #8BC34A)' // Hover gradient (slightly darker)
          : 'linear-gradient(to right, #a3e635, #32CD32)', // Default gradient
      }}
      onMouseEnter={() => setIsHovered(true)} // Set hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {text}
    </Button>
       
    );
};

export default PrimaryButton;