import React from 'react';
import { useModal } from '../../context/ModalContext';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  openModal?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '', openModal: shouldOpenModal = false }) => {
  const { openModal } = useModal();
  
  const handleClick = () => {
    if (shouldOpenModal) {
      openModal();
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-[#EAF0F8] text-[#566B86] rounded-[12px] py-4 px-8 transition-colors hover:bg-opacity-90 ${className}`}
      style={{ 
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '100%'
      }}
    >
      {text}
    </button>
  );
};

export default Button; 