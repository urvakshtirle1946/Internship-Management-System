import React, { useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Table from '../../components/common/Table';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';

const Reports = () => {
  const links = [
    { path: '/admin', label: 'Dashboard' },
    { path: '/admin/users', label: 'Users' },
    { path: '/admin/reports', label: 'Reports' },
    { path: '/admin/settings', label: 'Settings' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    { studentName: 'John Doe', reportName: 'Assignment 1', status: 'Reviewed' },
    { studentName: 'Jane Smith', reportName: 'Internship Report', status: 'Pending' },
    { studentName: 'Emily Davis', reportName: 'Final Project', status: 'Reviewed' },
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
              label="Review"
              onClick={() => openModal(report)}
              color="blue"
            />
          ),
        }))}
      />
      <Modal
        isOpen={isModalOpen}
        title="Review Report"
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
