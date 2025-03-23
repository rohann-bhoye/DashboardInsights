import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { volumeData } from '../../data/mockData';

const VolumeVsService = () => {
  return (
    <div>
      <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer>
          <BarChart
            data={volumeData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={30}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="volume" fill="#6366F1" radius={[4, 4, 0, 0]} />
            <Bar dataKey="service" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center mt-3 space-x-6">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-[#6366F1] mr-1"></span>
          <span className="text-xs text-gray-600">Volume</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-gray-300 mr-1"></span>
          <span className="text-xs text-gray-600">Service</span>
        </div>
      </div>
    </div>
  );
};

export default VolumeVsService;
