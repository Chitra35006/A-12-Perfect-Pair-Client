import { Button } from 'antd';
import 'antd/dist/reset.css'; 
import { useContext, useState } from 'react';
import { ThemeContext } from '../../Provider/ThemeContext';

const OutLineButton = ({text}) => {
  const{theme} = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  console.log('Current theme:', theme); // Debugging theme
console.log('Hover state:', isHovered)
    return (
       
      <Button
      type="default"
      style={{
        color: isHovered
          ? '#fff' // White text on hover
          : theme === 'light'
          ? '#a3e635' // Lime text for light theme
          : '#fff', // White text for dark theme
        backgroundColor: isHovered
          ? '#a3e635' // Hover background
          : theme === 'light'
          ? 'transparent' // Default light theme background
          : '#172554', // Default dark theme background
        fontWeight: 'bold',
        borderColor: '#a3e635', // Consistent border color
      }}
      onMouseEnter={() => setIsHovered(true)} // Set hover state
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {text}
    </Button>

    );
};

export default OutLineButton;