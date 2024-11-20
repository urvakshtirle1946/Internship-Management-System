import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Analytics from '../components/dashboard/AnalyticsCard';
import ToDoList from '../components/dashboard/TodoList';

const Dashboard = () => {
  const links = [
    { path: '/admin', label: 'Dashboard' },
    { path: '/admin/users', label: 'Users' },
    { path: '/admin/reports', label: 'Reports' },
    { path: '/admin/settings', label: 'Settings' },
  ];

  const stats = [
    { label: 'Total Students', value: 120 },
    { label: 'Total Mentors', value: 15 },
    { label: 'Pending Reports', value: 30 },
  ];

  return (
    <MainLayout title="Admin Dashboard" links={links}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Analytics stats={stats} />
        <ToDoList tasks={['Approve Mentor Application', 'Review Pending Reports', 'Update Platform Settings']} />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
