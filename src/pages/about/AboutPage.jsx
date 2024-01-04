import "./AboutPage.css"
import React from 'react'
import LayoutBase from "../../components/layout/LayoutBase"
import Buttons from "../../components/buttons/Buttons"
import HtmlIcon from "../../assets/icons/html_icon"
import CssIcon from "../../assets/icons/css_icon"
import JavascriptIcon from "../../assets/icons/javascript_icon"
import ReactIcon from "../../assets/icons/react_icon"
import FigmaIcon from "../../assets/icons/figma_icon"
/* import ArrowDownIcon from "../../assets/icons/arrow_down_icon" */

export default function AboutPage() {
    return(
        <LayoutBase>
            <div id="aboutpage">
                <div id="about-image-container">
                    <img id="about-portrait" src="./assets/images/portrait.jpg" alt="Portrait of myself." />
                </div>
                <div id="about-info-container">
                    <div id="about-wrapper" className="about-page-wrappers">
                        <h2 id="about-title" className="about-page-titles">About me</h2>
                        <p id="about-text" className="about-page-texts"><span className="about-text-break">My name is Stian Kvinnesland and I recently completed a course where I had the pleasure of learning HTML, CSS, JavaScript, React and SQL over the last 6 months. Now I'm looking for a potential workplace where I can utilise my newly learned skills and grow as a developer.</span><br/><span className="about-text-break">While I spent the last 6 months learning coding I do have a journeyman certificate as a ICT technician. I'm very fond of technology and working with machines and computer systems and it is a hobby of mine that I have had for several years. And learning how to code was the natural next step for me to increase my knowledge in the field of technology.</span><br/><span className="about-text-break">I'm an avid video game enjoyer as well and in my spare time I enjoy playing games where I can spend time with friends. I'm particularly fond of the genre massive multiplayer games where you work together as a team to overcome challenges.</span><br/><span className="about-text-break">I look forward to hearing from you!</span></p>
                    </div>
                    <div id="knowledge-wrapper" className="about-page-wrappers">
                        <h2 id="knowledge-title" className="about-page-titles">My Knowledge</h2>
                        <ul id="knowledge-buttons">
                            <Buttons to="https://developer.mozilla.org/en-US/docs/Web/HTML" icon={<HtmlIcon/>} text="HTML" external={true} />
                            <Buttons to="https://developer.mozilla.org/en-US/docs/Web/CSS" icon={<CssIcon/>} text="CSS" external={true} />
                            <Buttons to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" icon={<JavascriptIcon/>} text="Javascript" external={true} />
                            <Buttons to="https://react.dev/learn" icon={<ReactIcon/>} text="React" external={true} />
                            <Buttons to="https://www.figma.com/" icon={<FigmaIcon/>} text="Figma" external={true} />
                        </ul>
                        <p id="knowledge-text" className="about-page-texts">I began developing my skills as a front-end developer at a course supplied by a company named Jobloop in Haugesund, Norway. In the 6-months I've spent with them I got to explore and learn HTML, CSS which was the stepping stones to what I learned later on in the course, and what I found myself enjoying the most, Javascript and React.<br/>  Between learning these tools I also got to learn and work with Figma. Learning it by recreating sites at first and by the end I designed my own portfolio page before writing it. </p>
                    </div>
                </div>
            </div>
{/*             <div className="page-swap-wrapper">
                <ul className="page-swap-buttons">
                    <Buttons to="/projects" text="" className="page-link" icon={<ArrowDownIcon/>} />
                </ul>
            </div> */}
        </LayoutBase>
    )
};