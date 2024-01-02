import "./HomePage.css"
import React from 'react'
import LayoutBase from "../../components/layout/LayoutBase";
import Buttons from "../../components/buttons/Buttons";
import ResumeIcon from "../../assets/icons/resume_icon";
import GithubIcon from "../../assets/icons/github_icon";
import LinkedinIcon from "../../assets/icons/linkedin_icon";
import ArrowDownIcon from "../../assets/icons/arrow_down_icon";

export default function HomePage() {
    return(
        <LayoutBase>
            <div id="homepage">
                <div id="hero-container">
                    <p id="hero-title">Hi, my name is <br/><span id="hero-name">Stian Kvinnesland</span><br/>and I am a Front-End developer</p>
                    <ul className="hero-buttons">
                        <Buttons to="https://drive.google.com/file/d/1C8f-1BFVbBS2O2S6ifxNwQ7vEhkOEcyS/view?usp=sharing" icon={<ResumeIcon/>} text="Resume" external={true} />
                        <Buttons to="https://github.com/SKodehode" icon={<GithubIcon/>} text="GitHub" external={true} />
                        <Buttons to="https://linkedin.com/in/stian-kvinnesland-079289113" icon={<LinkedinIcon/>} text="LinkedIn" external={true} />
                    </ul>
                </div>
            </div>
        </LayoutBase>
    )
}