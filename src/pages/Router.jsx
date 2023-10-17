import { Routes, Route } from "react-router-dom"
import HomePage from "./home/Home"
import AboutPage from "./about/About"
import ProjectsPage from "./projects/projects"
import ContactPage from "./contact/contact"

function AppRouter() {
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="projects" element={<ProjectsPage/>}/>
                <Route path="contact" element={<ContactPage/>}/>
            </Routes>
        </>
    )
};

export default AppRouter;