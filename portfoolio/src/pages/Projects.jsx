import projectsData from "../data/projectsDb.json";
import SingleCard from "../components/SingleCard";
import "../components/Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-grid">
        {projectsData.map((proj) => (
          <SingleCard
            key={proj.id}
            title={proj.title}
            description={proj.description}
            imgSrc={proj.imgSrc}
            liveUrl={proj.liveUrl}
            gitUrl={proj.gitUrl}
          />
        ))}
      </div>
      <Link
        to="/courses"
        className="text-decoration-underline text-primary"
        style={{ cursor: "pointer" }}
      >
        Have a look at the stuff I’ve learned along the way.
      </Link>
    </div>
  );
}
