import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <p>Manage students, mentors, and internships.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
