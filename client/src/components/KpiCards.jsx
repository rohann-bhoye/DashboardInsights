import React from 'react';

const KpiCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Sales Card */}
      <div className="bg-red-50 rounded-lg p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-red-100 rounded-full p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">$1K</p>
            <p className="text-sm font-medium text-gray-600">Total Sales</p>
            <p className="text-xs text-gray-500 mt-1">+15% from yesterday</p>
          </div>
        </div>
      </div>
      
      {/* Total Order Card */}
      <div className="bg-orange-50 rounded-lg p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-orange-100 rounded-full p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">300</p>
            <p className="text-sm font-medium text-gray-600">Total Order</p>
            <p className="text-xs text-gray-500 mt-1">+24% from yesterday</p>
          </div>
        </div>
      </div>
      
      {/* Product Sold Card */}
      <div className="bg-green-50 rounded-lg p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">5</p>
            <p className="text-sm font-medium text-gray-600">Product Sold</p>
            <p className="text-xs text-gray-500 mt-1">+53% from yesterday</p>
          </div>
        </div>
      </div>
      
      {/* New Customers Card */}
      <div className="bg-purple-50 rounded-lg p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-purple-100 rounded-full p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">8</p>
            <p className="text-sm font-medium text-gray-600">New Customers</p>
            <p className="text-xs text-gray-500 mt-1">+12% from yesterday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KpiCards;
