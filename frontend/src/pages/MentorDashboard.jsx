import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MainLayout from '../components/layout/MainLayout';
import Analytics from '../components/dashboard/AnalyticsCard';
import ToDoList from '../components/dashboard/ToDoList';

const MentorDashboard = () => {
  const [reports, setReports] = useState([
    { id: 1, studentName: "John Doe", reportName: "Fortnightly Report 1", marks: "" },
    { id: 2, studentName: "Jane Smith", reportName: "Assignment 1", marks: "" },
    { id: 3, studentName: "Emily Davis", reportName: "Industry Mentor Evaluation", marks: "" },
  ]);
  const [feedback, setFeedback] = useState("");

  const links = [
    { path: '/mentor/dashboard', label: 'Dashboard' },
    { path: '/mentor/students', label: 'Students' },
    { path: '/mentor/reports', label: 'Reports' },
    { path: '/mentor/profile', label: 'Profile' },
    { path: '/mentor/settings', label: 'Settings' },
  ];

  const stats = [
    { label: 'Assigned Students', value: 12 },
    { label: 'Pending Reports', value: 5 },
    { label: 'Completed Evaluations', value: 15 },
  ];

  const handleMarksChange = (id, value) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === id ? { ...report, marks: value } : report
      )
    );
  };

  const handleSubmit = (id) => {
    const report = reports.find((r) => r.id === id);
    console.log(`Marks submitted for ${report.studentName}:`, report.marks);
  };

  return (
    <div className="bg-black min-h-screen">
      <MainLayout title="Mentor Dashboard" links={links}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Analytics stats={stats} />
          <ToDoList tasks={['Evaluate John Doe', 'Submit Report Feedback', 'Prepare for Workshop']} />
        </div>
      </MainLayout>
      <Navbar />
      <main className="mt-6">
        <div className="dark text-gray-100 min-h-screen p-4">
          <header className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold">Mentor Dashboard</h1>
          </header>

          <div className="mt-6">
            <section className="bg-gray-800 p-6 rounded mb-6">
              <h2 className="text-xl font-semibold mb-4">Assigned Students</h2>
              <ul>
                <li className="border-b border-gray-700 py-2">
                  <span className="font-medium">John Doe</span> - Progress: 80%
                </li>
                <li className="border-b border-gray-700 py-2">
                  <span className="font-medium">Jane Smith</span> - Progress: 50%
                </li>
              </ul>
            </section>

            <section className="bg-gray-800 p-6 rounded">
              <h2 className="text-xl font-semibold mb-4">Evaluate Reports</h2>
              <form className="space-y-4">
                <select
                  className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
                >
                  {reports.map((report) => (
                    <option key={report.id}>
                      {report.studentName} - {report.reportName}
                    </option>
                  ))}
                </select>
                <textarea
                  className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
                  placeholder="Feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
                <button
                  className="bg-green-600 px-4 py-2 rounded hover:bg-green-500"
                >
                  Submit Evaluation
                </button>
              </form>
            </section>
          </div>
        </div>

        <section className="bg-gray-800 p-6 rounded">
          <h2 className="text-xl font-semibold mb-4">Submit Marks for Reports</h2>
          <table className="w-full text-left bg-gray-800 rounded">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-4 text-gray-300">Student Name</th>
                <th className="p-4 text-gray-300">Report Name</th>
                <th className="p-4 text-gray-300">Marks</th>
                <th className="p-4 text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-gray-700">
                  <td className="p-4">{report.studentName}</td>
                  <td className="p-4">{report.reportName}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      placeholder="Enter marks"
                      value={report.marks}
                      onChange={(e) =>
                        handleMarksChange(report.id, parseFloat(e.target.value) || "")
                      }
                      className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
                    />
                  </td>
                  <td className="p-4">
                    <button
                      className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
                      onClick={() => handleSubmit(report.id)}
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default MentorDashboard;
