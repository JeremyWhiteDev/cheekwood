import { useNavigate, Link } from "react-router-dom/dist";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="navBar">
          <img className="logo" src={require("./nav-images/logo.png")} alt="" />
          <ul>
            <li className="navBar_item">
              <Link className="navBar_link" to="/aboutUs">
                About Us
              </Link>
            </li>
            <li className="navBar_item">
              <Link className="navBar_link" to="/map">
                Map
              </Link>
            </li>
            <li className="navBar_item">
              <Link className="navBar_link" to="/events">
                Events
              </Link>
            </li>
            <li className="navBar_item">
              <Link className="navBar_link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="navBar_item">
              <Link className="navBar_link" to="/questions">
                FAQ
              </Link>
            </li>

            {localStorage.getItem("project_user") ? (
              <li className="navBar_item">
                {" "}
                <Link
                  className="navBar_link"
                  to=""
                  onClick={() => {
                    localStorage.removeItem("project_user");
                    navigate("/", { replace: true });
                  }}
                >
                  Logout
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </nav>
      <div className="navSpacer"></div>
    </>
  );
};
