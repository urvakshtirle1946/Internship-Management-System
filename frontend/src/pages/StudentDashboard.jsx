import Navbar from "../components/Navbar";

const StudentDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
        <p>Submit internship details and reports.</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
