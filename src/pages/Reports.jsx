import React, { useState } from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import "./css/Report.css";

// Enregistrer les composants Chart.js nécessaires
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title
);

export const Reports = () => {
  // Données statiques
  const consultations = [
    { id: 1, patient: "Alice Martin", date: "2024-11-01", status: "En attente" },
    { id: 2, patient: "John Doe", date: "2024-10-28", status: "Approuvé" },
    { id: 3, patient: "Emma Stone", date: "2024-10-20", status: "Rejeté" },
    { id: 4, patient: "Paul Simon", date: "2024-10-15", status: "Approuvé" },
    { id: 5, patient: "Sara White", date: "2024-10-12", status: "En attente" },
    { id: 6, patient: "Lucas Brown", date: "2024-09-30", status: "Rejeté" },
    { id: 7, patient: "Laura Green", date: "2024-09-25", status: "Approuvé" },
    { id: 8, patient: "Tom Hardy", date: "2024-09-20", status: "Rejeté" },
  ];

  // Données des graphes
  const statusData = {
    labels: ["Approuvé", "Rejeté", "En attente"],
    datasets: [
      {
        data: [
          consultations.filter((c) => c.status === "Approuvé").length,
          consultations.filter((c) => c.status === "Rejeté").length,
          consultations.filter((c) => c.status === "En attente").length,
        ],
        backgroundColor: ["#27ae60", "#e74c3c", "#f39c12"],
      },
    ],
  };

  const barChartData = {
    labels: consultations.map((c) => c.date), // Dates comme labels
    datasets: [
      {
        label: "Statut des consultations",
        data: consultations.map((c) =>
          c.status === "Approuvé" ? 3 : c.status === "Rejeté" ? 2 : 1
        ), // Statut codé en chiffres
        backgroundColor: "#3498db",
      },
    ],
  };

  const lineChartData = {
    labels: consultations.map((c) => c.date), // Dates
    datasets: [
      {
        label: "Nombre total de consultations cumulées",
        data: consultations.map((_, i) => i + 1), // Cumul des consultations
        fill: false,
        borderColor: "#9b59b6",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="report-container">
      <h1>Rapport des Consultations</h1>
      {/* Section des statistiques */}
      <section className="statistics">
        <div className="stats-card">
          <h3>Total Consultations</h3>
          <p>150</p>
        </div>
        <div className="stats-card">
          <h3>En attente</h3>
          <p>45</p>
        </div>
        <div className="stats-card">
          <h3>Approuvées</h3>
          <p>85</p>
        </div>
        <div className="stats-card">
          <h3>Rejetées</h3>
          <p>20</p>
        </div>
      </section>

      {/* Graphiques dans des cartes flexibles */}
      <div className="graphique">
        <div className="chart-card">
          <h3>Répartition des Statuts</h3>
          <Pie data={statusData} />
        </div>

        <div className="chart-card">
          <h3>Consultations par Date</h3>
          <Bar data={barChartData} />
        </div>

        <div className="chart-card">
          <h3>Évolution Cumulée des Consultations</h3>
          <Line data={lineChartData} />
        </div>
      </div>

      {/* Tableau des consultations */}
      <div className="consultation-table">
        <h3>Détails des Consultations</h3>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((consultation) => (
              <tr key={consultation.id}>
                <td>{consultation.patient}</td>
                <td>{consultation.date}</td>
                <td
                  style={{
                    color:
                      consultation.status === "Approuvé"
                        ? "#27ae60"
                        : consultation.status === "Rejeté"
                        ? "#e74c3c"
                        : "#f39c12",
                  }}
                >
                  {consultation.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
