import { Link } from "react-router-dom"

export default function NavItem({ to, icon, text, external, className, id }) {
    if (external) {
        return (
            <li className={`nav-item ${to.replace("/", "")} ${className}`} id={id}>
                <a href={to} target="_blank" rel="noopener noreferrer">{icon}{text}</a>
            </li>
        );
    } 
        
        return (
            <li className={`nav-item ${to.replace("/", "")} ${className}`} id={id}>
                <Link to={to}>{icon}{text}</Link>
            </li>
        );
};