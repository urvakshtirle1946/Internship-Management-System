import React, { useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Table from '../../components/common/Table';
import Modal from '../../components/common/Modal';
import Button from '../../components/common/Button';

const Reports = () => {
  const links = [
    { path: '/mentor', label: 'Dashboard' },
    { path: '/mentor/students', label: 'Students' },
    { path: '/mentor/reports', label: 'Reports' },
    { path: '/mentor/profile', label: 'Profile' },
    { path: '/mentor/settings', label: 'Settings' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    { studentName: 'John Doe', reportName: 'Fortnightly Report', status: 'Pending' },
    { studentName: 'Jane Smith', reportName: 'Assignment 1', status: 'Reviewed' },
  ];

  const headers = ['Student Name', 'Report Name', 'Status', 'Actions'];

  const openModal = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  return (
    <MainLayout title="Reports" links={links}>
      <Table
        headers={headers}
        data={reports.map((report) => ({
          studentName: report.studentName,
          reportName: report.reportName,
          status: report.status,
          actions: (
            <Button
              label="Evaluate"
              onClick={() => openModal(report)}
              color="blue"
            />
          ),
        }))}
      />
      <Modal
        isOpen={isModalOpen}
        title="Evaluate Report"
        onClose={() => setIsModalOpen(false)}
      >
        <div>
          {selectedReport && (
            <>
              <p>
                <strong>Student:</strong> {selectedReport.studentName}
              </p>
              <p>
                <strong>Report:</strong> {selectedReport.reportName}
              </p>
              <textarea
                className="w-full p-2 mt-4 bg-gray-700 text-gray-300 rounded"
                placeholder="Write feedback..."
              />
              <Button
                label="Submit Feedback"
                onClick={() => setIsModalOpen(false)}
                color="green"
              />
            </>
          )}
        </div>
      </Modal>
    </MainLayout>
  );
};

export default Reports;
