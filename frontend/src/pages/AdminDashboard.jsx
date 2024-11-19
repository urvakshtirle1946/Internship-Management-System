import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <main className="mt-6">
          <section className="bg-gray-800 p-6 rounded mb-6">
            <h2 className="text-xl font-semibold mb-4">Manage Students</h2>
            <ul>
              <li className="border-b border-gray-700 py-2 flex justify-between">
                <span>John Doe</span>
                <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-500">
                  Remove
                </button>
              </li>
              <li className="border-b border-gray-700 py-2 flex justify-between">
                <span>Jane Smith</span>
                <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-500">
                  Remove
                </button>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
