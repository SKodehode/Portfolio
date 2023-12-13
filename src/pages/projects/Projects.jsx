import "./projects.css"
import LayoutBase from "../../components/layout/LayoutBase"
import ProjectCards from "../../components/projectcards/ProjectCards"
import { data } from "../../components/data/data"

export default function ProjectsPage() {
    return(
        <LayoutBase>
            <div id="projectspage">
               <p>I am the project's page.</p>
               <div id="projects-wrapper">
                    <ProjectCards posts={data} />
               </div>
            </div>
        </LayoutBase>
    )
}