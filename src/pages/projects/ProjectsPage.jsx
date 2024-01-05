import "./ProjectsPage.css"
import LayoutBase from "../../components/layout/LayoutBase"
import ProjectsList from "../../components/projectslist/ProjectsList"
import { projectsData } from "../../components/data/projectsData"


export default function ProjectsPage() {
    return(
        <LayoutBase>
            <div id="projects-page">
               <div id="projects-container">
                    <h3 id="projects-title">Projects</h3>
                    <ProjectsList projects={projectsData} />
               </div>
            </div>
        </LayoutBase>
    )
}