import Buttons from "../buttons/Buttons";
import HomeIcon from "../../assets/icons/home_icon";
import GithubIcon from "../../assets/icons/github_icon";
import "./ProjectCard.css"

export default function ProjectCard({ project }) {
  return (
    <div className="project-container" key={project.id}>
        <img className="project-image" src={project.image} alt={project.title} />
      <div className="project-info">
        <div className="projects-info-wrapper">
          <h4 className="project-title">{project.title}</h4>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="project-buttons-wrapper">
          <div className="project-tools">
            <ul>
              {project.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="project-link">
          {project.livepage && ( <Buttons to={project.livepage} icon={<HomeIcon />} text="View" external={true} /> )}
          {project.githublink && ( <Buttons to={project.githublink} icon={<GithubIcon />} text="GitHub" external={true} /> )}
          </div>
        </div>
      </div>
    </div>
  );
}