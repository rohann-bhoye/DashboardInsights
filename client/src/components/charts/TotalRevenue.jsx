import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { revenueData } from '../../data/mockData';

const TotalRevenue = () => {
  return (
    <div>
      <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer>
          <BarChart
            data={revenueData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={12}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value}k`} />
            <Tooltip formatter={(value) => [`${value}k`, 'Revenue']} />
            <Bar dataKey="online" fill="#6366F1" radius={[10, 10, 0, 0]} />
            <Bar dataKey="offline" fill="#3B82F6" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center mt-3 space-x-6">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-[#6366F1] mr-1"></span>
          <span className="text-xs text-gray-600">Online Sales</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-[#3B82F6] mr-1"></span>
          <span className="text-xs text-gray-600">Offline Sales</span>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
