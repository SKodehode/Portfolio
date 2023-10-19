import { Link } from "react-router-dom"

export default function Buttons({ to, icon, text, external, className, id }) {
    if (external) {
        return (
            <li className={`buttons ${to.replace("/", "")} ${className}`} id={id}>
                <a href={to} target="_blank" rel="noopener noreferrer"><span className="icon">{icon}</span><span className="text">{text}</span></a>
            </li>
        );
    } 
        
        return (
            <li className={`buttons ${to.replace("/", "")} ${className}`} id={id}>
                <Link to={to}><span className="icon">{icon}</span><span className="text">{text}</span></Link>
            </li>
        );
};