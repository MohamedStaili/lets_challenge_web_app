import React from "react";
import "./css/Consultation.css";

export const Consultation = () => {
  // Données fictives pour 20 consultations
  const videoRequests = [
    { id: 1, patient: "Alice Martin", date: "01/11/2024", status: "En attente", doctor: "Dr. Dupont", duration: "30 min", method: "Vidéo" },
    { id: 2, patient: "John Doe", date: "28/10/2024", status: "Approuvé", doctor: "Dr. Leblanc", duration: "45 min", method: "Téléphone" },
    { id: 3, patient: "Emma Stone", date: "20/10/2024", status: "Rejeté", doctor: "Dr. Rousseau", duration: "20 min", method: "Vidéo" },
    { id: 4, patient: "Maxime Moreau", date: "15/10/2024", status: "En attente", doctor: "Dr. Lefevre", duration: "40 min", method: "Téléphone" },
    { id: 5, patient: "Sophia Taylor", date: "10/10/2024", status: "Approuvé", doctor: "Dr. Boucher", duration: "25 min", method: "Vidéo" },
    { id: 6, patient: "Lucas Martin", date: "05/10/2024", status: "Rejeté", doctor: "Dr. Bernard", duration: "30 min", method: "Téléphone" },
    { id: 7, patient: "Olivia Garcia", date: "30/09/2024", status: "En attente", doctor: "Dr. Michel", duration: "50 min", method: "Vidéo" },
    { id: 8, patient: "James Brown", date: "25/09/2024", status: "Approuvé", doctor: "Dr. Laroche", duration: "35 min", method: "Téléphone" },
    { id: 9, patient: "Amelia Davis", date: "20/09/2024", status: "Rejeté", doctor: "Dr. Adam", duration: "30 min", method: "Vidéo" },
    { id: 10, patient: "Daniel Wilson", date: "15/09/2024", status: "En attente", doctor: "Dr. Fournier", duration: "45 min", method: "Téléphone" },
    { id: 11, patient: "Grace Adams", date: "10/09/2024", status: "Approuvé", doctor: "Dr. Lefevre", duration: "40 min", method: "Vidéo" },
    { id: 12, patient: "Michael Harris", date: "05/09/2024", status: "Rejeté", doctor: "Dr. Dupont", duration: "20 min", method: "Téléphone" },
    { id: 13, patient: "Ethan Johnson", date: "01/09/2024", status: "En attente", doctor: "Dr. Rousseau", duration: "30 min", method: "Vidéo" },
    { id: 14, patient: "Ella Clark", date: "28/08/2024", status: "Approuvé", doctor: "Dr. Bernard", duration: "35 min", method: "Téléphone" },
    { id: 15, patient: "Henry Lewis", date: "23/08/2024", status: "Rejeté", doctor: "Dr. Michel", duration: "40 min", method: "Vidéo" },
    { id: 16, patient: "Lily Walker", date: "18/08/2024", status: "En attente", doctor: "Dr. Boucher", duration: "30 min", method: "Téléphone" },
    { id: 17, patient: "David Hall", date: "13/08/2024", status: "Approuvé", doctor: "Dr. Laroche", duration: "25 min", method: "Vidéo" },
    { id: 18, patient: "Chloe Allen", date: "08/08/2024", status: "Rejeté", doctor: "Dr. Dupont", duration: "45 min", method: "Téléphone" },
    { id: 19, patient: "Samuel King", date: "03/08/2024", status: "En attente", doctor: "Dr. Lefevre", duration: "40 min", method: "Vidéo" },
    { id: 20, patient: "Charlotte Young", date: "28/07/2024", status: "Approuvé", doctor: "Dr. Bernard", duration: "30 min", method: "Téléphone" },
  ];

  return (
    <div className="consultation-videos-container">
      <h1>Demandes de Consultations Vidéo</h1>
      <div className="consultation-cards-container">
        {videoRequests.map((request) => (
          <div className="consultation-card" key={request.id}>
            <h3 className="card-title">{request.patient}</h3>
            <p className="card-date">Date : {request.date}</p>
            <p className={`card-status ${request.status.toLowerCase().replace(" ", "-")}`}>
              Statut : {request.status}
            </p>
            <p className="card-doctor">Médecin : {request.doctor}</p>
            <p className="card-duration">Durée : {request.duration}</p>
            <p className="card-method">Méthode : {request.method}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
