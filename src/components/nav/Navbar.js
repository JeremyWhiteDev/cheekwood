import { useNavigate, Link } from "react-router-dom/dist"
import "./Navbar.css"
// import logo from "../../logo.png"

export const Navbar = () => {

    const navigate = useNavigate()

    return <ul className="navBar">
        {/* <li><img src={logo} alt="" /></li> */}
        <li className="navBar_item"><Link className="navBar_link" to="/aboutUs">About Us</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/map">Map</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="">Directions</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/events">Events</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="">My Events</Link></li>
        <li className="navBar_item"><Link className="navBar_link" to="/profile">Profile</Link></li>
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
}

