import { Routes, Route } from "react-router-dom"
import React from 'react'
import HomePage from "./home/Home"
import AboutPage from "./about/About"
import ProjectsPage from "./projects/Projects"
import ContactPage from "./contact/Contact"

export default function AppRouter() {
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </>
    )
};