import React from 'react';

const Table = ({ headers, data }) => {
  return (
    <table className="w-full text-left bg-gray-800 rounded">
      <thead>
        <tr className="border-b border-gray-700">
          {headers.map((header, idx) => (
            <th key={idx} className="p-4 text-gray-300">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="border-b border-gray-700">
            {Object.values(row).map((cell, i) => (
              <td key={i} className="p-4">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
