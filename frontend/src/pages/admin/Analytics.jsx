import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import AnalyticsCard from '../../components/dashboards/AnalyticsCard';

const Analytics = () => {
  const links = [
    { path: '/admin', label: 'Dashboard' },
    { path: '/admin/users', label: 'Users' },
    { path: '/admin/reports', label: 'Reports' },
    { path: '/admin/settings', label: 'Settings' },
  ];

  const stats = [
    { label: 'Total Active Students', value: 120 },
    { label: 'Total Active Mentors', value: 15 },
    { label: 'Total Reports Submitted', value: 150 },
    { label: 'Total Pending Reports', value: 30 },
  ];

  return (
    <MainLayout title="Analytics" links={links}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <AnalyticsCard key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Analytics;
