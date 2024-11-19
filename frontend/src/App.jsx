import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Home from "./pages/Home";
import StudentSettings from "./pages/student/Settings";
import StudentProfile from "./pages/student/Profile";
import StudentReports from "./pages/student/Reports";
import StudentCourses from "./pages/student/Courses";
import Students from "./pages/mentor/Students";
import MentorReports from "./pages/mentor/Reports";
import MentorProfile from "./pages/mentor/Profile";
import MentorSettings from "./pages/mentor/Settings";
import AdminSettings from "./pages/admin/Settings";
import AdminReports from "./pages/admin/Reports";
import AdminUsers from "./pages/admin/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/mentor" element={<MentorDashboard />} />
        <Route path="/mentor/students" element={<Students />} />
        <Route path="/mentor/reports" element={<MentorReports />} />
        <Route path="/mentor/profile" element={<MentorProfile />} />
        <Route path="/mentor/settings" element={<MentorSettings />} />ß
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<StudentCourses />} />
        <Route path="/student/reports" element={<StudentReports />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/settings" element={<StudentSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
