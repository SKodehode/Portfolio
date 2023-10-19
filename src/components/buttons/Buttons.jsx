import { Link } from "react-router-dom"

export default function Buttons({ to, icon, text, external, className, id }) {
    if (external) {
        return (
            <li className={`external-button ${to.replace("/", "")} ${className}`} id={id}>
                <a href={to} target="_blank" rel="noopener noreferrer">{icon}{text}</a>
            </li>
        );
    } 
        
        return (
            <li className={`internal-button ${to.replace("/", "")} ${className}`} id={id}>
                <Link to={to}>{icon}{text}</Link>
            </li>
        );
};


/* External-button <Buttons to="" icon={</>} text="" external={true} /> */
/* Internal-button <Buttons to="/" text="Home" id="navlink" className="page-link"/> */