import React from 'react';

const InternshipTracker = ({ internships }) => {
  return (
    <div className="bg-gray-800 p-6 rounded shadow-md">
      <h3 className="text-xl font-semibold text-gray-300">Internship Tracker</h3>
      <div className="mt-4 space-y-4">
        {internships.map((internship, index) => (
          <div key={index} className="p-4 bg-gray-700 rounded">
            <h4 className="font-semibold text-gray-300">{internship.title}</h4>
            <p className="text-gray-400">Company: {internship.company}</p>
            <p className="text-gray-400">Status: <span className={`font-bold ${internship.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>{internship.status}</span></p>
            <p className="text-gray-400">Duration: {internship.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipTracker;
