import React from "react";

export default function StudentCard({ name, rollNumber, course, email, skills = [], isActive }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{name}</h3>
        <span className={isActive ? "badge active" : "badge inactive"}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <p><strong>Roll:</strong> {rollNumber}</p>
      <p><strong>Course:</strong> {course}</p>
      <p>{email}</p>

      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}
