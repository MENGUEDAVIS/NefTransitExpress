import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  // On utilise un SVG inline recréant le logo pour garantir l'affichage
  return (
    <div className={className}>
      <svg 
        width="220" 
        height="80" 
        viewBox="0 0 220 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Avion */}
        <path d="M55 23C50 21 46 20 41 23C36 26 38 29 38 29L49 28.5L55 23Z" fill="none" stroke="#2699D6" strokeWidth="2"/>
        <path d="M52 27C56 25 61 22 66 21C71 20 73 21 73 21L69 25L54 31L52 27Z" fill="none" stroke="#2699D6" strokeWidth="2"/>
        <path d="M68 23C68 23 66 26 65 28C64 30 64 33 64 33L51 34L53 30L68 23Z" fill="none" stroke="#2699D6" strokeWidth="2"/>
        
        {/* Camion */}
        <path d="M44 45H64V55H44V45Z" fill="none" stroke="#2699D6" strokeWidth="2"/>
        <path d="M64 50H74L76 52V55H64V50Z" fill="none" stroke="#2699D6" strokeWidth="2"/>
        <circle cx="49" cy="58" r="3" fill="none" stroke="#2699D6" strokeWidth="2"/>
        <circle cx="69" cy="58" r="3" fill="none" stroke="#2699D6" strokeWidth="2"/>
        <path d="M41 52H44" stroke="#2699D6" strokeWidth="2"/>
        
        {/* Texte NEF */}
        <path d="M90 30L95 30L100 50L96 50L95 45L90 45L89 50L85 50L90 30ZM91 42L94 42L93 35L92 35L91 42Z" fill={light ? "#FFFFFF" : "#000000"}/>
        <path d="M102 30L110 30C112 30 113 31 113 33L113 35C113 37 112 38 110 38L106 38L106 50L102 50L102 30ZM106 35L109 35L109 33L106 33L106 35Z" fill={light ? "#FFFFFF" : "#000000"}/>
        <path d="M115 30L124 30L124 33L119 33L119 38L123 38L123 41L119 41L119 47L124 47L124 50L115 50L115 30Z" fill={light ? "#FFFFFF" : "#000000"}/>
        
        {/* Barre transit */}
        <rect x="85" y="38" width="45" height="3" fill="#2699D6"/>
        
        {/* Texte transit */}
        <text x="108" y="64" fontFamily="Arial" fontSize="16" textAnchor="middle" fill={light ? "#FFFFFF" : "#000000"}>TRANSIT</text>
        
        {/* Express sarl */}
        <text x="162" y="60" fontFamily="Arial" fontSize="14" textAnchor="middle" fill={light ? "#FFFFFF" : "#000000"}>Express Sarl</text>
      </svg>
    </div>
  );
};

export default Logo;
