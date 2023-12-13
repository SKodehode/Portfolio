import "./ProjectCards.css"
import GithubIcon from "../../assets/icons/github_icon"
import HomeIcon from "../../assets/icons/home_icon"
import Buttons from "../buttons/Buttons"

export default function ProjectCards({ posts }) {
    return(
        <>
            {posts.map((post) => (
                <div className="card-wrapper" key={post.id}>
                    <div className="card-info">
                        <h2 className="card-title">{post.title}</h2>
                        <p className="card-description">{post.description}</p>
                        <div>
                            <Buttons to={post.githublink} icon={<GithubIcon/>} text="GitHub" external={true} />
                            <Buttons to={post.livepage} icon={<HomeIcon/>} text="Visit" external={true} />
                        </div>
                    </div>
                    <div className="Project-Image">
                        <img className="card-image" src={post.image} alt={post.title} />
                    </div>
                </div>

            ))}
        </>
    )
}