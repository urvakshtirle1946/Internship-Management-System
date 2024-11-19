import React from 'react';

const AnalyticsCard = ({ stats }) => {
  return (
    <div className="bg-gray-800 p-4 rounded grid grid-cols-2 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-gray-700 p-4 rounded text-center">
          <h4 className="text-xl font-bold text-white">{stat.value}</h4>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AnalyticsCard
