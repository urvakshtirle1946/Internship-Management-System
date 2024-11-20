import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Table from '../../components/common/Table';

const Courses = () => {
  const links = [
    { path: '/student', label: 'Dashboard' },
    { path: '/student/courses', label: 'Courses' },
    { path: '/student/reports', label: 'Reports' },
    { path: '/student/internship-form', label: 'Intern Form' },
    { path: '/student/profile', label: 'Profile' },
    { path: '/student/settings', label: 'Settings' },
  ];

  const courses = [
    { courseName: 'React Basics', progress: '80%' },
    { courseName: 'Advanced JavaScript', progress: '60%' },
    { courseName: 'Database Management', progress: '90%' },
  ];

  const headers = ['Course Name', 'Progress'];

  return (
    <MainLayout title="Courses" links={links}>
      <Table
        headers={headers}
        data={courses.map((course) => ({
          courseName: course.courseName,
          progress: course.progress,
        }))}
      />
    </MainLayout>
  );
};

export default Courses;
