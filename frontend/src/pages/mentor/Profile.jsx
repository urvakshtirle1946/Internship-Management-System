import React, { useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';

const Profile = () => {
  const links = [
    { path: '/mentor', label: 'Dashboard' },
    { path: '/mentor/students', label: 'Students' },
    { path: '/mentor/reports', label: 'Reports' },
    { path: '/mentor/profile', label: 'Profile' },
    { path: '/mentor/settings', label: 'Settings' },
  ];

  const [profile, setProfile] = useState({
    name: 'Mentor Name',
    email: 'mentor@example.com',
    phone: '987-654-3210',
  });

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleSave = () => {
    console.log('Profile updated:', profile);
  };

  return (
    <MainLayout title="Profile" links={links}>
      <form className="space-y-4">
        <InputField
          label="Name"
          value={profile.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <InputField
          label="Email"
          type="email"
          value={profile.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <InputField
          label="Phone"
          type="tel"
          value={profile.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
        <Button label="Save" onClick={handleSave} color="green" />
      </form>
    </MainLayout>
  );
};

export default Profile;
