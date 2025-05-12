// src/pages/Courses.jsx
import React from "react";
import coursesData from "../data/coursesDb.json";
import SingleCard from "../components/SingleCard";
import "../components/Projects.css"; // re-uses your grid/centering CSS

export default function Courses() {
  return (
    <div className="projects-page">
      <div className="projects-grid">
        {coursesData.map((course) => (
          <SingleCard
            key={course.id}
            title={course.title}
            description={course.description}
            imgSrc={course.imgSrc}
            liveUrl={course.liveUrl}
            gitUrl={course.gitUrl}
          />
        ))}
      </div>
    </div>
  );
}
