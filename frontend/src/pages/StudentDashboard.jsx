import Navbar from "../components/Navbar";

const StudentDashboard = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
        <main className="mt-6">
          <section className="bg-gray-800 p-6 rounded mb-6">
            <h2 className="text-xl font-semibold mb-4">Submit Internship Details</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company Address"
                className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
                Submit
              </button>
            </form>
          </section>

          <section className="bg-gray-800 p-6 rounded">
            <h2 className="text-xl font-semibold mb-4">Uploaded Reports</h2>
            <ul>
              <li className="border-b border-gray-700 py-2">Fortnightly Report 1 - Approved</li>
              <li className="border-b border-gray-700 py-2">Assignment 1 - Pending</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
