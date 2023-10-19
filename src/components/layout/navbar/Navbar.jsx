import "./nav_bar.css"
import "./nav_buttons.css"
import "./nav_icons.css"
import Buttons from "../../buttons/Buttons"
import GithubIcon from "../../../assets/icons/github_icon"
import LinkedinIcon from "../../../assets/icons/linkedin_icon"

export default function Navbar() {
    return(
        <nav>
            <ul className="nav-social">
                <Buttons to="https://github.com/SKodehode" icon={<GithubIcon/>} text="" external={true} />
                <Buttons to="https://linkedin.com/in/stian-kvinnesland-079289113" icon={<LinkedinIcon />} text="" external={true} />

            </ul>
            <ul className="nav-pages">
                <Buttons to="/" text="Home" id="navlink" className="page-link"/>
                <Buttons to="/about" text="About" className="page-link"/>
                <Buttons to="/projects" text="Projects" className="page-link"/>
                <Buttons to="/contact" text="Contact" className="page-link"/>
            </ul>
        </nav>
    );
};