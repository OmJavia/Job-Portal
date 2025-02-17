import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import JobSeekerDashboard from "../pages/JobSeekerDashboard";
import RecruiterDashboard from "../pages/RecruiterDashboard";

function Approuter() {
  return (
    <Router>
    <div className="relative">
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 to-blue-900 opacity-30"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-seeker" element={<JobSeekerDashboard />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
      </Routes>
    </div>
  </Router>
  );
}

export default Approuter;
