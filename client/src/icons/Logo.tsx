import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <svg 
      width="200" 
      height="80" 
      viewBox="0 0 200 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="200" height="80" fill="transparent"/>
      
      {/* Airplane part */}
      <path 
        d="M56 25C51 23 47 22 42 25C37 28 39 31 39 31L50 30.5L56 25Z" 
        stroke="#2699D6" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M53 29C57 27 62 24 67 23C72 22 74 23 74 23L70 27L55 33L53 29Z" 
        stroke="#2699D6" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M69 25C69 25 67 28 66 30C65 32 65 35 65 35L52 36L54 32L69 25Z" 
        stroke="#2699D6" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Truck part */}
      <path 
        d="M45 45H65V55H45V45Z" 
        stroke="#2699D6" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M65 50H75L77 52V55H65V50Z" 
        stroke="#2699D6" 
        strokeWidth="2" 
        fill="none"
      />
      <circle cx="50" cy="58" r="3" stroke="#2699D6" strokeWidth="2" fill="none"/>
      <circle cx="70" cy="58" r="3" stroke="#2699D6" strokeWidth="2" fill="none"/>
      <path 
        d="M42 52H45" 
        stroke="#2699D6" 
        strokeWidth="2"
      />
      
      {/* Text part */}
      <path 
        d="M90 30H95L100 50H96L95 45H90L89 50H85L90 30ZM91 42H94L93 35H92L91 42Z" 
        fill={light ? "#FFFFFF" : "#000000"}
      />
      <path 
        d="M102 30H110C112 30 113 31 113 33V35C113 37 112 38 110 38H106V50H102V30ZM106 35H109V33H106V35Z" 
        fill={light ? "#FFFFFF" : "#000000"}
      />
      <path 
        d="M115 30H124V33H119V38H123V41H119V47H124V50H115V30Z" 
        fill={light ? "#FFFFFF" : "#000000"}
      />
      
      <path 
        d="M90 60H110" 
        stroke="#2699D6" 
        strokeWidth="3"
      />
      <text 
        x="100" 
        y="70" 
        fontFamily="Arial" 
        fontSize="14" 
        textAnchor="middle" 
        fill={light ? "#FFFFFF" : "#000000"}
      >
        Express Sarl
      </text>
    </svg>
  );
};

export default Logo;
