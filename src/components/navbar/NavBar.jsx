import "./nav_bar.css"
import "./nav_buttons.css"
import "./nav_icons.css"
import NavItem from "./NavItems"
import GithubIcon from "../../assets/icons/github_icon"
import LinkedinIcon from "../../assets/icons/linkedin_icon"

export default function NavBar() {
    return(
        <nav>
            <ul className="nav-social">
                <NavItem to="https://github.com/SKodehode" icon={<GithubIcon/>} text="" external={true} />
                <NavItem to="https://linkedin.com/in/stian-kvinnesland-079289113" icon={<LinkedinIcon />} text="" external={true} />

            </ul>
            <ul className="nav-pages">
                <NavItem to="/" text="Home" id="navlink" className="page-link"/>
                <NavItem to="/about" text="About" className="page-link"/>
                <NavItem to="/projects" text="Projects" className="page-link"/>
                <NavItem to="/contact" text="Contact" className="page-link"/>
            </ul>
        </nav>
    );
};