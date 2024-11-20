import React from "react";
import "./css/Consultation.css";

export const Consultation = () => {
  // Données fictives
  const videoRequests = [
    { id: 1, patient: "Alice Martin", date: "01/11/2024", status: "En attente" },
    { id: 2, patient: "John Doe", date: "28/10/2024", status: "Approuvé" },
    { id: 3, patient: "Emma Stone", date: "20/10/2024", status: "Rejeté" },
  ];

  return (
    <div className="consultation-videos-container">
      <h1>Demandes de Consultations Vidéo</h1>
      <table className="consultation-videos-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {videoRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.patient}</td>
              <td>{request.date}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


