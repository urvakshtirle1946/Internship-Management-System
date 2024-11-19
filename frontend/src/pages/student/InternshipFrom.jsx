import React, { useState } from "react";

const InternshipForm = ({ onSubmit }) => {
  const [studentName, setStudentName] = useState("");
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");
  const [status, setStatus] = useState("In Progress");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentName || !company || !duration) {
      alert("Please fill out all required fields.");
      return;
    }

    const newInternship = {
      id: Date.now(), // Generate unique ID
      studentName,
      company,
      duration,
      status,
      feedback,
    };

    onSubmit(newInternship);

    setStudentName("");
    setCompany("");
    setDuration("");
    setStatus("In Progress");
    setFeedback("");
  };

  return (
    <form
      className="bg-gray-800 p-6 rounded space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-gray-100">Add Internship</h2>

      <div>
        <label className="block text-gray-300 mb-1">Student Name</label>
        <input
          type="text"
          placeholder="Enter student's name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
          required
        />
      </div>

      {/* Company */}
      <div>
        <label className="block text-gray-300 mb-1">Company</label>
        <input
          type="text"
          placeholder="Enter company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
          required
        />
      </div>

      {/* Duration */}
      <div>
        <label className="block text-gray-300 mb-1">Duration</label>
        <input
          type="text"
          placeholder="e.g., 3 months, 6 weeks"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
          required
        />
      </div>

      {/* Status */}
      <div>
        <label className="block text-gray-300 mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-300 mb-1">Feedback (Optional)</label>
        <textarea
          placeholder="Enter mentor feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 px-4 py-2 rounded text-gray-100 hover:bg-green-500"
      >
        Add Internship
      </button>
    </form>
  );
};

export default InternshipForm;
