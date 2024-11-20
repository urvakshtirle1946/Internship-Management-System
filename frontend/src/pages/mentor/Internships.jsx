import React, { useState } from "react";
import InternshipForm from "./InternshipForm";

const MentorDashboard = () => {
  const [internships, setInternships] = useState([]);

  const handleAddInternship = (newInternship) => {
    setInternships((prev) => [...prev, newInternship]);
  };

  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className="text-3xl text-gray-100 font-bold mb-6">Mentor Dashboard</h1>

      {/* Internship Form */}
      <InternshipForm onSubmit={handleAddInternship} />

      {/* Internship List */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
          Internship Records
        </h2>
        <table className="w-full text-left bg-gray-800 rounded">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-gray-300">Student Name</th>
              <th className="p-4 text-gray-300">Company</th>
              <th className="p-4 text-gray-300">Duration</th>
              <th className="p-4 text-gray-300">Status</th>
              <th className="p-4 text-gray-300">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((internship) => (
              <tr key={internship.id} className="border-b border-gray-700">
                <td className="p-4">{internship.studentName}</td>
                <td className="p-4">{internship.company}</td>
                <td className="p-4">{internship.duration}</td>
                <td className="p-4">{internship.status}</td>
                <td className="p-4">{internship.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MentorDashboard;
