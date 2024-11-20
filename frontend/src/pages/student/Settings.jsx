import React, { useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Button from '../../components/common/Button';

const Settings = () => {
  const links = [
    { path: '/student', label: 'Dashboard' },
    { path: '/student/courses', label: 'Courses' },
    { path: '/student/reports', label: 'Reports' },
    { path: '/student/internship-form', label: 'Intern Form' },
    { path: '/student/profile', label: 'Profile' },
    { path: '/student/settings', label: 'Settings' },
  ];

  const [theme, setTheme] = useState('Light');

  const handleSave = () => {
    console.log('Settings saved:', { theme });
  };

  return (
    <MainLayout title="Settings" links={links}>
      <form className="space-y-4">
        <select name='Theme'>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
        <Button label="Save Settings" onClick={handleSave} color="blue" />
      </form>
    </MainLayout>
  );
};

export default Settings;
