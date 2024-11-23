import React from "react";
import "./css/Patient.css";

// Données des patients
const patients = [
  { id: 1, name: "Alice Martin", admissionDate: "2024-11-01", status: "Actif", age: 30, diagnosis: "Grippe" },
  { id: 2, name: "John Doe", admissionDate: "2024-10-28", status: "Inactif", age: 45, diagnosis: "Hypertension" },
  { id: 3, name: "Emma Stone", admissionDate: "2024-10-20", status: "Actif", age: 35, diagnosis: "Diabète" },
  { id: 4, name: "Paul Simon", admissionDate: "2024-10-15", status: "Inactif", age: 60, diagnosis: "Arthrite" },
  { id: 5, name: "Sara Sra", admissionDate: "2024-10-12", status: "Actif", age: 25, diagnosis: "Migraine" },
  { id: 6, name: "Lucas Brown", admissionDate: "2024-09-30", status: "Inactif", age: 50, diagnosis: "Asthme" },
  { id: 7, name: "Laura Green", admissionDate: "2024-09-25", status: "Actif", age: 40, diagnosis: "COVID-19" },
  { id: 8, name: "Tom Hardy", admissionDate: "2024-09-20", status: "Inactif", age: 55, diagnosis: "Cancer" },
];

export const Patients = () => {
  return (
    <div className="patients-container">
      <h1>Liste des Patients</h1>

      {/* Cartes des patients */}
      <section className="patients-cards">
        {patients.map((patient) => (
          <div key={patient.id} className="patient-card">
            <h3>{patient.name}</h3>
            <p><strong>Date d'admission :</strong> {patient.admissionDate}</p>
            <p><strong>Status :</strong> {patient.status}</p>
            <p><strong>Âge :</strong> {patient.age} ans</p>
            <p><strong>Diagnostic :</strong> {patient.diagnosis}</p>
          </div>
        ))}
      </section>
    </div>
  );
};


