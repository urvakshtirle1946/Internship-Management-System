import React from 'react';

const ToDoList = ({ tasks }) => {
  return (
    <div className="bg-gray-800 p-6 rounded shadow-md">
      <h3 className="text-xl font-semibold text-gray-300">To-Do List</h3>
      <ul className="mt-4 space-y-3">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center text-gray-400">
            <span>{task}</span>
            <button className="text-green-400 hover:text-green-300">Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
