import ProjectCard from "../projectcard/ProjectCard";

function ProjectsList({ projects }) {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsList;