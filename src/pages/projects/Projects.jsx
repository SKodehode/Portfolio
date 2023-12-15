import "./projects.css"
import LayoutBase from "../../components/layout/LayoutBase"
import ProjectsList from "../../components/projectslist/ProjectsList"
import { projects } from "../../components/data/projects"

export default function ProjectsPage() {
    return(
        <LayoutBase>
            <div id="projectspage">
               <p>I am the project's page.</p>
               <div id="projects-wrapper">
                    <ProjectsList projects={projects} />
               </div>
            </div>
        </LayoutBase>
    )
}