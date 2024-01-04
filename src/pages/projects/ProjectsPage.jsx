import "./ProjectsPage.css"
import LayoutBase from "../../components/layout/LayoutBase"
import ProjectsList from "../../components/projectslist/ProjectsList"
import { projectsData } from "../../components/data/projectsData"


export default function ProjectsPage() {
    return(
        <LayoutBase>
            <div id="projects-page">
               <h3 id="projects-title">Projects</h3>
               <div id="projects-container">
                    <ProjectsList projects={projectsData} />
               </div>
            </div>
        </LayoutBase>
    )
}