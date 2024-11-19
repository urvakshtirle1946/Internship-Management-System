import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Table from '../../components/common/Table';

const Students = () => {
  const links = [
    { path: '/mentor', label: 'Dashboard' },
    { path: '/mentor/students', label: 'Students' },
    { path: '/mentor/reports', label: 'Reports' },
    { path: '/mentor/profile', label: 'Profile' },
    { path: '/mentor/settings', label: 'Settings' },
  ];

  const students = [
    { studentName: 'John Doe', progress: '80%', internship: 'Google' },
    { studentName: 'Jane Smith', progress: '50%', internship: 'Amazon' },
    { studentName: 'Emily Davis', progress: '95%', internship: 'Meta' },
  ];

  const headers = ['Student Name', 'Progress', 'Internship'];

  return (
    <MainLayout title="Students" links={links}>
      <Table
        headers={headers}
        data={students.map((student) => ({
          studentName: student.studentName,
          progress: student.progress,
          internship: student.internship,
        }))}
      />
    </MainLayout>
  );
};

export default Students;
