import React from 'react';

const AcademicProgress = ({ studentName, progress, grade }) => {
  return (
    <div className="bg-gray-800 p-6 rounded shadow-md">
      <h3 className="text-xl font-semibold text-gray-300">Academic Progress</h3>
      <div className="mt-4">
        <p className="text-gray-400">Student: {studentName}</p>
        <div className="mt-2">
          <p className="text-gray-400">Progress: {progress}%</p>
          <div className="h-2 bg-gray-600 mt-1 rounded">
            <div
              className="h-full bg-green-600 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="mt-2 text-gray-400">Grade: {grade}</p>
      </div>
    </div>
  );
};

export default AcademicProgress;
