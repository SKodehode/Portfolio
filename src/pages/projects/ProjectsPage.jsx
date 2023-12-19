import "./ProjectsPage.css"
import LayoutBase from "../../components/layout/LayoutBase"
import ProjectsList from "../../components/projectslist/ProjectsList"
import { projectsData } from "../../components/data/projectsData"


export default function ProjectsPage() {
    return(
        <LayoutBase>
            <div id="projectspage">
               <h3>Projects</h3>
               <div id="projects-wrapper">
                    <ProjectsList projects={projectsData} />
               </div>
            </div>
        </LayoutBase>
    )
}