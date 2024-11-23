import React, { useState, useRef, useEffect } from "react";
import './sidebar2.css'
import {Link } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import SummarizeIcon from '@mui/icons-material/Summarize';
import { MdLocalHospital } from "react-icons/md";
import { MdAssistant } from "react-icons/md";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const loadingRef = useRef(null);

  // Simule un écran de chargement
  useEffect(() => {
    if (loadingRef.current) {
      loadingRef.current.classList.add("hidden");
    }
  }, []);

  return (
    <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light sidebarr">
      {/* Écran de chargement */}
      <div
        ref={loadingRef}
        className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-blue-600"
      >
        Loading.....
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-y-0 z-10 flex w-80 transition-transform transform translate-x-0">
          <svg
            className="absolute inset-0 w-full h-full text-white"
            style={{ filter: "drop-shadow(10px 0 10px #00000030)" }}
            preserveAspectRatio="none"
            viewBox="0 0 309 800"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
          </svg>
          <div className="z-10 flex flex-col flex-1">
            {/* Logo et bouton de fermeture */}
            <div className="flex items-center justify-between flex-shrink-0 w-64 p-4">
              <Link to='/'>
                <img src="/logo.png" alt="logo" width={'100px'} height={'100px'}/>
              </Link>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-1 rounded-lg focus:outline-none focus:ring"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="sr-only">Close sidebar</span>
              </button>
            </div>
            {/* Navigation */}
            <nav className="flex flex-col flex-1 w-64 p-4 mt-4">
              <Link to='/' className="flex items-center space-x-2">
                <AiFillDashboard size={30}/>
                <span>Dashboard</span>
              </Link>
              
              <Link to='/patients' className="flex items-center space-x-2">
                <FaUserMd size={30}/>
                <span>Patients</span>
              </Link>
              <Link to='/reports' className="flex items-center space-x-2">
              <SummarizeIcon size={30}/>
                <span>Reports</span>
              </Link>
              <Link to='/consultations' className="flex items-center space-x-2">
              <MdLocalHospital size={30}/>
                <span>Consultations</span>
              </Link>
              <Link to='/assistantai' className="flex items-center space-x-2">
                  <MdAssistant size={30}/>
                  <span>Assistant AI</span>
                  
              </Link>
              
            </nav>
            {/* Bouton logout */}
            <div className="flex-shrink-0 p-4">
              <button className="flex items-center space-x-2">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <main className="flex flex-col items-center justify-center flex-1">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed p-2 text-white bg-black rounded-lg top-5 left-5 taggle"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="sr-only">Open menu</span>
        </button>
        
      </main>
    </div>
  );
};

export default Navbar;
