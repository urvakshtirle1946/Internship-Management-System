import Navbar from "../components/Navbar";

const MentorDashboard = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="dark text-gray-100 min-h-screen p-4">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">Mentor Dashboard</h1>
        </header>

        <main className="mt-6">
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
                <option>John Doe - Fortnightly Report 1</option>
                <option>Jane Smith - Assignment 1</option>
              </select>
              <textarea
                className="w-full p-2 rounded bg-gray-700 text-gray-300 focus:outline-none"
                placeholder="Feedback"
              />
              <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-500">
                Submit Evaluation
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MentorDashboard;
