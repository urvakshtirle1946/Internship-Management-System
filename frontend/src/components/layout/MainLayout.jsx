import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children, links }) => {
  return (
    <div className="flex">
      <Sidebar links={links} />
      <div className="flex-grow">
        <Header title="Dashboard" />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
