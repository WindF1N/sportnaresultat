import React from 'react';

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <div 
      style={{ width: `${width}px`, height: `${height}px` }}
      className="bg-gray-300 flex items-center justify-center text-gray-600 font-semibold"
    >
      LOGO
    </div>
  );
};

export default Logo; 