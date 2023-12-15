import Buttons from "../buttons/Buttons";
import HomeIcon from "../../assets/icons/home_icon";
import GithubIcon from "../../assets/icons/github_icon";

export default function ProjectCard({ project }) {
  return (
    <div className="project-wrapper" key={project.id}>
      <div className="project-info">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <div className="project-tools">
          <ul>
            {project.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
        <div className="project-links">
          <Buttons
            to={project.livepage}
            icon={<HomeIcon />}
            text="Visit"
            external={true}
          />
          <Buttons
            to={project.githublink}
            icon={<GithubIcon />}
            text="GitHub"
            external={true}
          />
        </div>
      </div>
      <div className="project-image-container">
        <img
          className="project-image-image"
          src={project.image}
          alt={project.title}
        />
      </div>
    </div>
  );
}