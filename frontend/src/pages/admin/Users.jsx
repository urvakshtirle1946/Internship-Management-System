import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Table from '../../components/common/Table';
import Button from '../../components/common/Button';

const Users = () => {
  const links = [
    { path: '/admin', label: 'Dashboard' },
    { path: '/admin/users', label: 'Users' },
    { path: '/admin/reports', label: 'Reports' },
    { path: '/admin/settings', label: 'Settings' },
  ];

  const users = [
    { username: 'John Doe', role: 'Student', status: 'Active' },
    { username: 'Jane Smith', role: 'Mentor', status: 'Inactive' },
    { username: 'Emily Davis', role: 'Student', status: 'Active' },
  ];

  const headers = ['Username', 'Role', 'Status', 'Actions'];

  const handleAction = (user) => {
    console.log(`Action on user: ${user.username}`);
  };

  return (
    <MainLayout title="Users" links={links}>
      <Table
        headers={headers}
        data={users.map((user) => ({
          username: user.username,
          role: user.role,
          status: user.status,
          actions: (
            <Button
              label={user.status === 'Active' ? 'Deactivate' : 'Activate'}
              onClick={() => handleAction(user)}
              color={user.status === 'Active' ? 'red' : 'green'}
            />
          ),
        }))}
      />
    </MainLayout>
  );
};

export default Users;
