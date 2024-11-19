import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ links }) => {
  return (
    <aside className="bg-gray-800 p-4 w-64 h-screen">
      <ul>
        {links.map((link, idx) => (
          <li key={idx} className="mb-4">
            <Link to={link.path} className="text-gray-300 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
