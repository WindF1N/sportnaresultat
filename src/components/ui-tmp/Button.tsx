import React from 'react';
import { motion } from 'framer-motion';
import { buttonAnimation } from '../../utils/framerAnimations';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  customStyles?: React.CSSProperties;
  animate?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  className = '', 
  customStyles,
  animate = true 
}) => {
  const defaultStyles = {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '100%'
  };

  if (!animate) {
    return (
      <button
        onClick={onClick}
        className={`bg-[#EAF0F8] text-[#566B86] rounded-[12px] py-4 px-8 transition-colors hover:bg-opacity-90 ${className}`}
        style={{ 
          ...defaultStyles,
          ...customStyles
        }}
      >
        {text}
      </button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`bg-[#EAF0F8] text-[#566B86] rounded-[12px] py-4 px-8 transition-colors ${className}`}
      style={{ 
        ...defaultStyles,
        ...customStyles
      }}
      variants={buttonAnimation}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      {text}
    </motion.button>
  );
};

export default Button; 