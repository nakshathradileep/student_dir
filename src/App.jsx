import React from "react";
import "./App.css";

function App() {
  // 🔹 All student data (active + alumni)
  const activeStudents = [
    {
      name: "Alice Johnson",
      rollNumber: "FS-101",
      course: "Full Stack Development",
      email: "alice@example.com",
      skills: ["JavaScript", "React", "CSS"],
      isActive: true
    },
    {
      name: "Mark Lee",
      rollNumber: "FS-102",
      course: "Full Stack Development",
      email: "mark@example.com",
      skills: ["Node.js", "Express", "MongoDB"],
      isActive: true
    },
    {
      name: "Sophia Patel",
      rollNumber: "FS-103",
      course: "Full Stack Development",
      email: "sophia@example.com",
      skills: ["HTML", "CSS", "React"],
      isActive: true
    },
    {
      name: "Daniel Kim",
      rollNumber: "FS-104",
      course: "Full Stack Development",
      email: "daniel@example.com",
      skills: ["React", "Redux", "JavaScript"],
      isActive: true
    }
  ];

  const alumni = [
    {
      name: "Emma Watson",
      rollNumber: "FS-001",
      course: "Full Stack Development",
      email: "emma@example.com",
      skills: ["React", "Python"],
      isActive: false
    },
    {
      name: "James Carter",
      rollNumber: "FS-002",
      course: "Full Stack Development",
      email: "james@example.com",
      skills: ["Node.js", "SQL"],
      isActive: false
    },
    {
      name: "Priya Sharma",
      rollNumber: "FS-003",
      course: "Full Stack Development",
      email: "priya@example.com",
      skills: ["JavaScript", "UI/UX"],
      isActive: false
    }
  ];

  // 🔹 Stats calculation
  const totalStudents = activeStudents.length + alumni.length;

  const allSkills = [...activeStudents, ...alumni].flatMap(
    (student) => student.skills
  );

  const skillFrequency = allSkills.reduce((acc, skill) => {
    acc[skill] = (acc[skill] || 0) + 1;
    return acc;
  }, {});

  const mostCommonSkill = Object.entries(skillFrequency).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  // 🔹 Reusable card UI (function inside App.jsx)
  const StudentCard = (student, key) => (
    <div className="student-card" key={key}>
      <h2>{student.name}</h2>
      <p><strong>Roll Number:</strong> {student.rollNumber}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Email:</strong> {student.email}</p>

      <strong>Skills:</strong>
      <div className="skills-list">
        {student.skills.map((skill, i) => (
          <span key={i} className="skill-badge">{skill}</span>
        ))}
      </div>

      <span className={student.isActive ? "badge active" : "badge inactive"}>
        {student.isActive ? "Active" : "Inactive"}
      </span>
    </div>
  );

  return (
    <div className="app">

      <header>
        <h1>Student Directory 2025</h1>
        <p>Full Stack Development Batch</p>
      </header>

      {/* ACTIVE STUDENTS SECTION */}
      <section>
        <h2>Active Students</h2>
        <div className="student-grid">
          {activeStudents.map((student, index) =>
            StudentCard(student, index)
          )}
        </div>
      </section>

      {/* ALUMNI SECTION */}
      <section>
        <h2>Alumni</h2>
        <div className="student-grid">
          {alumni.map((student, index) =>
            StudentCard(student, index)
          )}
        </div>
      </section>

      {/* DIRECTORY STATISTICS */}
      <section className="stats">
        <h2>Directory Statistics</h2>
        <p><strong>Total Students:</strong> {totalStudents}</p>
        <p><strong>Active Students:</strong> {activeStudents.length}</p>
        <p><strong>Alumni:</strong> {alumni.length}</p>
        <p><strong>Most Common Skill:</strong> {mostCommonSkill}</p>
      </section>

      <footer>
        <p>Full Stack Development Institute</p>
        <p>Contact: support@studentportal.com</p>
        <p>© 2025 Student Portal</p>
      </footer>
    </div>
  );
}

export default App;