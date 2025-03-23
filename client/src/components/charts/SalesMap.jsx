import React from 'react';

const SalesMap = () => {
  return (
    <div className="relative h-[180px]">
      <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        {/* Simplified world map outline */}
        <path d="M120,160 Q200,120 280,160 T440,160 T600,160 T760,160 V260 Q680,300 600,260 T440,260 T280,260 T120,260 Z" fill="#EBF5FF" stroke="#CBD5E1" strokeWidth="1"></path>
        
        {/* Highlighted countries */}
        <circle cx="200" cy="180" r="20" fill="#FCD34D" stroke="#fff" strokeWidth="1" opacity="0.8"></circle>
        <circle cx="350" cy="190" r="25" fill="#F87171" stroke="#fff" strokeWidth="1" opacity="0.8"></circle>
        <circle cx="500" cy="170" r="22" fill="#60A5FA" stroke="#fff" strokeWidth="1" opacity="0.8"></circle>
        <circle cx="580" cy="210" r="30" fill="#818CF8" stroke="#fff" strokeWidth="1" opacity="0.8"></circle>
        <circle cx="650" cy="180" r="18" fill="#34D399" stroke="#fff" strokeWidth="1" opacity="0.8"></circle>
      </svg>
    </div>
  );
};

export default SalesMap;
