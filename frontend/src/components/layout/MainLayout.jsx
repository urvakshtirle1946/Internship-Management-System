import React from 'react';
import Sidebar from './Sidebar';
import Navbar from '../Navbar';

const MainLayout = ({ children, links }) => {
  return (
    <div className="flex">
      <Sidebar links={links} />
      <div className="flex-grow">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
