import Navbar from "../components/Navbar";

const MentorDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Mentor Dashboard</h2>
        <p>View assigned students and grade reports.</p>
      </div>
    </div>
  );
};

export default MentorDashboard;
