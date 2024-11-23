import React from "react";
import "./css/Assistant.css";

export const AssistantAI = () => {
  return (
    <div className="assistant-container">
      <h1>Assistant Pour les Docteurs</h1>
      <div className="chat-box">
        <div className="chat-header">
          <h2>Dr. AI - Votre Assistant Médical</h2>
        </div>
        <div className="chat-content">
          <div className="chat-message user">
            <p>Bonjour, montre-moi le dossier médical de Mme Dupont.</p>
          </div>
          <div className="chat-message ai">
            <p>
            Bonjour Docteur ! Voici les informations principales sur Mme Dupont :  
              <ul>
                <li>Date de naissance : 12/05/1980</li>
                <li>Antécédents médicaux : Diabète de type 2, hypertension</li>
                <li>Dernière consultation : 10/11/2024</li>
                <li>Dernier traitement prescrit : Metformine 500 mg (2 fois par jour)</li>
                
              </ul>
              Souhaitez-vous accéder aux détails complets du dossier ou ajouter une observation ?"*
            </p>
          </div>
          <div className="chat-message user">
            <p>Ajoute une observation : Le patient se plaint de maux de tête fréquents et d'insomnie</p>
          </div>
          <div className="chat-message ai">
            <p>
            Observation ajoutée avec succès au dossier de Mme Dupont.
Voulez-vous planifier des examens complémentaires ou consulter des recommandations ?

            </p>
          </div>
          <div className="chat-message user">
            <p>Oui, propose-moi des examens pour ces symptômes</p>
          </div>
          <div className="chat-message ai">
            <p>
            Pour des maux de tête fréquents et de l'insomnie, les examens suivants sont recommandés :
                <ul>
                    <li>IRM cérébrale</li>
                    <li>Bilan sanguin (hémogramme, glycémie)</li>
                    <li>Polysomnographie (étude du sommeil)</li>
                </ul>
                Voulez-vous les ajouter à la liste des examens prescrits ?
            </p>
          </div>
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Posez votre question ici..."
            disabled
          />
          <button disabled>Envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default AssistantAI;
