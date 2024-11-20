import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const ReportReview = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      studentName: "John Doe",
      reportName: "Fortnightly Report 1",
      status: "Pending Review",
      submittedOn: "2024-11-10",
      fileUrl: "https://example.com/report1.pdf",
      comments: "",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      reportName: "Assignment 1",
      status: "Needs Revision",
      submittedOn: "2024-11-15",
      fileUrl: "https://example.com/report2.pdf",
      comments: "Add more details to the summary.",
    },
  ]);

  const [selectedReport, setSelectedReport] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === id ? { ...report, status: newStatus } : report
      )
    );
  };

  const handleCommentChange = (id, newComments) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === id ? { ...report, comments: newComments } : report
      )
    );
  };

  const handleReviewSubmit = () => {
    console.log("Updated Report:", selectedReport);
    // Add API call or further logic here
    setSelectedReport(null);
  };

  return (
    <div className="dark text-gray-100 min-h-screen p-4 bg-black">
      <Navbar />

      <main className="mt-6">
        <section className="bg-gray-800 p-6 rounded">
          <h2 className="text-xl font-semibold mb-4">Review Submitted Reports</h2>
          <table className="w-full text-left bg-gray-800 rounded">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-4 text-gray-300">Student Name</th>
                <th className="p-4 text-gray-300">Report Name</th>
                <th className="p-4 text-gray-300">Submitted On</th>
                <th className="p-4 text-gray-300">Status</th>
                <th className="p-4 text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-gray-700">
                  <td className="p-4">{report.studentName}</td>
                  <td className="p-4">{report.reportName}</td>
                  <td className="p-4">{report.submittedOn}</td>
                  <td className="p-4">{report.status}</td>
                  <td className="p-4">
                    <button
                      onClick={() => setSelectedReport(report)}
                      color="blue"
                    >Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {selectedReport && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded text-gray-300 w-2/3">
              <h3 className="text-lg font-semibold mb-4">
                Review: {selectedReport.reportName}
              </h3>

              <p>
                <strong>Student Name:</strong> {selectedReport.studentName}
              </p>
              <p>
                <strong>Submitted On:</strong> {selectedReport.submittedOn}
              </p>
              <p>
                <strong>Status:</strong> {selectedReport.status}
              </p>
              <p>
                <strong>File:</strong>{" "}
                <a
                  href={selectedReport.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  View Report
                </a>
              </p>

              <div className="mt-4">
                <label className="block mb-2">Comments</label>
                <textarea
                  value={selectedReport.comments}
                  onChange={(e) =>
                    setSelectedReport({
                      ...selectedReport,
                      comments: e.target.value,
                    })
                  }
                  className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
                  rows="4"
                />
              </div>

              <div className="mt-4">
                <label className="block mb-2">Update Status</label>
                <select
                  value={selectedReport.status}
                  onChange={(e) =>
                    setSelectedReport({
                      ...selectedReport,
                      status: e.target.value,
                    })
                  }
                  className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
                >
                  <option value="Pending Review">Pending Review</option>
                  <option value="Approved">Approved</option>
                  <option value="Needs Revision">Needs Revision</option>
                </select>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button
                  label="Cancel"
                  onClick={() => setSelectedReport(null)}
                  color="red"
                >Cancel</button>
                <button
                  label="Submit"
                  onClick={handleReviewSubmit}
                  color="green"
                >Submit</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ReportReview;
