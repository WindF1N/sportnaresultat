import React from 'react';

interface ButtonProps {
  text: string;
  customStyles?: React.CSSProperties;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, customStyles, onClick }) => {
  return (
    <button 
      onClick={onClick}
      style={{
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '100%',
        backgroundColor: '#D5FF5F',
        padding: '24px 48px',
        borderRadius: '12px',
        ...customStyles
      }}
    >
      {text}
    </button>
  );
};

export default Button; 