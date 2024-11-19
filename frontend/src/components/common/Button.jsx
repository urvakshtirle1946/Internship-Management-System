import React from 'react';

const Button = ({ label, onClick, color = 'blue', size = 'md', disabled = false }) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`bg-${color}-600 hover:bg-${color}-500 text-white font-semibold rounded ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
