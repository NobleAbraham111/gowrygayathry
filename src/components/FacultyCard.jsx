// src/components/FacultyCard.jsx
import React from "react";
import "./styles/facultyPage.css";

const FacultyCard = ({ name, title, image, description, isFounder }) => {
    return (
        <div className={`faculty-card ${isFounder ? "founder-card" : ""}`}>
            <div className="faculty-image">
                <img src={image} alt={name} />
            </div>
            <div className="faculty-info">
                <h3>{name}</h3>
                <p className="faculty-title">{title}</p>
                <p className="faculty-desc">{description}</p>
            </div>
        </div>
    );
};

export default FacultyCard;