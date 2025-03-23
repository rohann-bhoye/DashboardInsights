import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { targetData } from '../../data/mockData';

const TargetVsReality = () => {
  return (
    <div>
      <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer>
          <BarChart
            data={targetData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={16}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="target" fill="#F59E0B" radius={[4, 4, 0, 0]} />
            <Bar dataKey="reality" fill="#10B981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-3">
        <div className="bg-gray-50 rounded-md p-2">
          <p className="text-xs text-gray-500">Reality Sales</p>
          <p className="text-sm font-semibold">9,851</p>
        </div>
        <div className="bg-gray-50 rounded-md p-2">
          <p className="text-xs text-gray-500">Target Sales</p>
          <p className="text-sm font-semibold">12,352</p>
        </div>
      </div>
    </div>
  );
};

export default TargetVsReality;
