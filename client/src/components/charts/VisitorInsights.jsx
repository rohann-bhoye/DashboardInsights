import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { visitorData } from '../../data/mockData';

const VisitorInsights = () => {
  return (
    <div>
      <div style={{ width: '100%', height: 180 }}>
        <ResponsiveContainer>
          <LineChart
            data={visitorData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="local"
              stroke="#8B5CF6"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="new"
              stroke="#EF4444"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="unique"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center mt-3 space-x-6">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-1"></span>
          <span className="text-xs text-gray-600">Local Customers</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1"></span>
          <span className="text-xs text-gray-600">New Customers</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
          <span className="text-xs text-gray-600">Unique Customers</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorInsights;
