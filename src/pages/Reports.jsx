import React from "react";
import "./css/Report.css";

export const Reports = () => {
  // Données fictives
  const reports = [
    { id: 1, patient: "Alice Martin", date: "01/11/2024", report: "Analyse sanguine - Normal" },
    { id: 2, patient: "John Doe", date: "15/10/2024", report: "Scanner - Anomalie détectée" },
    { id: 3, patient: "Emma Stone", date: "20/09/2024", report: "IRM - Résultats satisfaisants" },
  ];

  return (
    <div className="reports-container">
      <h1>Rapports de Santé</h1>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Rapport</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.patient}</td>
              <td>{report.date}</td>
              <td>{report.report}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


