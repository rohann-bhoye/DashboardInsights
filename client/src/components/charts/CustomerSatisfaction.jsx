import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { satisfactionData } from '../../data/mockData';

const CustomerSatisfaction = () => {
  return (
    <div>
      <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer>
          <AreaChart
            data={satisfactionData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="satisfaction" 
              stroke="#10B981" 
              fill="rgba(16, 185, 129, 0.1)" 
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-3">
        <div className="bg-gray-50 rounded-md p-2 text-center">
          <p className="text-xs text-gray-500">Last Month</p>
          <p className="text-sm font-semibold">$3,024</p>
        </div>
        <div className="bg-gray-50 rounded-md p-2 text-center">
          <p className="text-xs text-gray-500">This Month</p>
          <p className="text-sm font-semibold">$4,502</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
