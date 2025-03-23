import React, { useEffect, useState } from 'react';

const Progress = ({ percentage, color }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate progress bar on mount
    setTimeout(() => {
      setWidth(percentage);
    }, 100);
  }, [percentage]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div 
        className="h-1.5 rounded-full transition-all duration-1000 ease-out" 
        style={{ 
          width: `${width}%`,
          backgroundColor: color 
        }}
      ></div>
    </div>
  );
};

export default Progress;
