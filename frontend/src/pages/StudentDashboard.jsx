import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import AcademicProgress from '../components/dashboard/AcademicProgress';
import InternshipTracker from '../components/dashboard/InternshipTracker';
import ToDoList from '../components/dashboard/TodoList';

const Dashboard = () => {
  const links = [
    { path: '/student', label: 'Dashboard' },
    { path: '/student/courses', label: 'Courses' },
    { path: '/student/reports', label: 'Reports' },
    { path: '/student/profile', label: 'Profile' },
    { path: '/student/settings', label: 'Settings' },
  ];

  return (
    <MainLayout title="Student Dashboard" links={links}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AcademicProgress progress={70} />
        <InternshipTracker
          internships={[
            { company: 'Google', status: 'Ongoing' },
            { company: 'Meta', status: 'Completed' },
          ]}
        />
        <ToDoList tasks={['Submit Assignment', 'Attend Workshop', 'Update Profile']} />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
