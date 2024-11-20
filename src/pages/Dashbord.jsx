import React from "react";
import DashboardCharts from "../components/DashboardCharts";
import "./css/Dashboard.css"; 
export const Dashbord = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      {/* Section des statistiques */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Nombre total de patients</h3>
          <p>200</p>
        </div>
        <div className="stat-card">
          <h3>Consultations mensuelles</h3>
          <p>50</p>
        </div>
        <div className="stat-card">
          <h3>Patients guéris</h3>
          <p>150</p>
        </div>
        <div className="stat-card">
          <h3>Consultations annulées</h3>
          <p>10</p>
        </div>
      </div>

      {/* Section des diagrammes */}
      <div className="dashboard-charts-section">
        <h2>Statistiques des consultations</h2>
        <DashboardCharts />
      </div>
    </div>
  );
};


