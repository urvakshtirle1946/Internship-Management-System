import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Table from '../../components/common/Table';

const Reports = () => {
  const links = [
    { path: '/student', label: 'Dashboard' },
    { path: '/student/courses', label: 'Courses' },
    { path: '/student/reports', label: 'Reports' },
    { path: '/student/internship-form', label: 'Intern Form' },
    { path: '/student/profile', label: 'Profile' },
    { path: '/student/settings', label: 'Settings' },
  ];

  const reports = [
    { reportName: 'Assignment 1', status: 'Reviewed', marks: '85/100' },
    { reportName: 'Fortnightly Report', status: 'Pending', marks: 'N/A' },
  ];

  const headers = ['Report Name', 'Status', 'Marks'];

  return (
    <MainLayout title="Reports" links={links}>
      <Table
        headers={headers}
        data={reports.map((report) => ({
          reportName: report.reportName,
          status: report.status,
          marks: report.marks,
        }))}
      />
    </MainLayout>
  );
};

export default Reports;
