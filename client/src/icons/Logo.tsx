import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <div className={className}>
      <img
        src="/attached_assets/image_1747548875281.png"
        alt="NEF TRANSIT EXPRESS SARL"
        className="h-full w-auto"
      />
    </div>
  );
};

export default Logo;
