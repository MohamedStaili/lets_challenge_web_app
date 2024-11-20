import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css"; // Include the CSS below or your custom styles

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-container `}>
      <nav className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/patientdetails">Patient Details</Link>
          </li>
          <li>
            <Link to="/patients">Patients</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/ressources">Resources</Link>
          </li>
          <li>
            <Link to="/consultations">Consultations</Link>
          </li>
        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
