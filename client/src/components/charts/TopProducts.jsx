import React from 'react';
import Progress from '../ui/Progress';
import { topProductsData } from '../../data/mockData';

const TopProducts = () => {
  return (
    <div className="space-y-4">
      {topProductsData.map((product, index) => (
        <div key={index}>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <span className="text-gray-500 w-6">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-sm">{product.name}</span>
            </div>
            <span className="text-xs font-medium" style={{ color: product.color }}>{product.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className="h-1.5 rounded-full" 
              style={{ 
                width: `${product.percentage}%`,
                backgroundColor: product.color 
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopProducts;
