import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/"><h1 className="text-xl font-bold">Internship Orbit</h1></Link>
        <div>
          <Link to="/admin" className="mr-4">Admin</Link>
          <Link to="/mentor" className="mr-4">Mentor</Link>
          <Link to="/student">Student</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
