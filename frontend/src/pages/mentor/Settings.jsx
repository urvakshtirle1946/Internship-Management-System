import React, { useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Button from '../../components/common/Button';

const Settings = () => {
  const links = [
    { path: '/mentor', label: 'Dashboard' },
    { path: '/mentor/students', label: 'Students' },
    { path: '/mentor/reports', label: 'Reports' },
    { path: '/mentor/profile', label: 'Profile' },
    { path: '/mentor/settings', label: 'Settings' },
  ];

  const [theme, setTheme] = useState('Dark');

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
