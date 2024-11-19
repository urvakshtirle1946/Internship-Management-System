import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/mentor" element={<MentorDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
