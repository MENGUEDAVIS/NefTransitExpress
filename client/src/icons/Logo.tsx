import React from 'react';
import logoImage from '../assets/logo.png';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <div className={className}>
      <img
        src={logoImage}
        alt="NEF TRANSIT EXPRESS SARL"
        className="h-full w-auto"
        style={{ maxHeight: '60px' }}
      />
    </div>
  );
};

export default Logo;
