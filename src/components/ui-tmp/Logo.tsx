import React from 'react';
import logoSvg from '../../assets/logo.svg';

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <img src={logoSvg} alt="Логотип" width={width} height={height} />
    </div>
  );
};

export default Logo; 