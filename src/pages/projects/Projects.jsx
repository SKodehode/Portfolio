import "./projects.css"
import LayoutBase from "../../components/layout/LayoutBase"
import ProjectsList from "../../components/projectslist/ProjectsList"
import { projects } from "../../components/data/projects.js"

export default function ProjectsPage() {
    return(
        <LayoutBase>
            <div id="projectspage">
               <h3>Projects</h3>
               <div id="projects-wrapper">
                    <ProjectsList projects={projects} />
               </div>
            </div>
        </LayoutBase>
    )
}