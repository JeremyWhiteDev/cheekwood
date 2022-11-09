import { useNavigate, Link } from "react-router-dom/dist"
import "./Navbar.css"

export const Navbar = () => {

    const navigate = useNavigate()

    return <>
        <nav>

            <ul className="navBar">
                <li><img className="logo" src={require("./images/logo.png")} alt="" /></li>
                <li className="navBar_item"><Link className="navBar_link" to="">About Us</Link></li>
                <li className="navBar_item"><Link className="navBar_link" to="">Directions</Link></li>
                <li className="navBar_item"><Link className="navBar_link" to="/events">Events</Link></li>
                <li className="navBar_item"><Link className="navBar_link" to="">My Events</Link></li>
                <li className="navBar_item"><Link className="navBar_link" to="">Profile</Link></li>

                {
                    localStorage.getItem("project_user")
                        ?
                        <li className="navBar_item" > <Link className="navBar_link" to="" onClick={
                            () => {
                                localStorage.removeItem("project_user")
                                navigate("/", { replace: true })
                            }
                        }>Logout</Link>

                        </li> : ""}
            </ul>
        </nav>
        <div className="navSpacer">
        </div>
    </>
}

