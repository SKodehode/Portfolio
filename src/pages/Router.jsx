import { Routes, Route } from "react-router-dom"
import React from 'react'
import HomePage from "./home/HomePage"
import AboutPage from "./about/AboutPage"
import ProjectsPage from "./projects/ProjectsPage"
import ContactPage from "./contact/ContactPage"
import AppreciationPage from "./appreciation/AppreciationPage"

export default function AppRouter() {
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/thank-you" element={<AppreciationPage/>}/>
            </Routes>
        </>
    )
};