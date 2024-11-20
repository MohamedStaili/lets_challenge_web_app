import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DashboardCharts = () => {
  // Données pour les graphiques
  const data = [
    { mois: "Jan", consultations: 40, patients: 30 },
    { mois: "Fév", consultations: 30, patients: 25 },
    { mois: "Mar", consultations: 20, patients: 15 },
    { mois: "Avr", consultations: 27, patients: 20 },
    { mois: "Mai", consultations: 18, patients: 15 },
    { mois: "Juin", consultations: 23, patients: 20 },
    { mois: "Juil", consultations: 34, patients: 30 },
  ];

  return (
    <div className="charts-container">
      {/* Graphique en ligne */}
      <div className="chart">
        <h3>Évolution des patients mensuels</h3>
        <LineChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mois" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="patients" stroke="#8884d8" />
        </LineChart>
      </div>

      {/* Graphique en barres */}
      <div className="chart">
        <h3>Tendance des consultations</h3>
        <BarChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mois" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="consultations" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default DashboardCharts;
