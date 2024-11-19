import React from 'react';

const InputField = ({ label, type = 'text', value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-300 mb-2">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
      />
    </div>
  );
};

export default InputField;
