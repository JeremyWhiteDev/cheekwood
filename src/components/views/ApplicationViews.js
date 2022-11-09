import { Outlet, Route, Routes } from "react-router-dom";
import { Event } from "../events/Event";
import "./ApplicationViews.css"

export const ApplicationViews = () => {
  const localUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localUser);

  return <div className="applicationViews">
    <Routes>
      <Route path="/" element={<>
        <img className="heroImg" src={require("./images/2021-Website-Hero-Image_Aerial-1600x584.png")} alt="" />
        <section className="linkContainer">
          <div>
            <img className="linkImg" src={require("./images/Rose-Study-Garden.jpg")} alt="" />
            <h4>About Us</h4>
          </div>
          <div>
            <img className="linkImg" src={require("./images/Herb-Study-Garden.jpg")} alt="" />
            <h4>Directions</h4>
          </div>
          <div>
            <img className="linkImg" src={require("./images/Burr-Terrace-Garden.jpg")} alt="" />
            <h4>Events</h4>
          </div>
          <div>
            <img className="linkImg" src={require("./images/20200523_cheekwood_0574.jpg")} alt="" />
            <h4>My Events</h4>
          </div>
          <div>
            <img className="linkImg" src={require("./images/dogwoods.jpg")} alt="" />
            <h4>Profile</h4>
          </div>
        </section>
      </>} >
      </Route>

      <Route path="/about-us" element={<>about-us </>} />
      <Route path="/map" element={<>map</>} />
      <Route path="/events" element={<Event />} />
      <Route path="/event/:eventId" element={<>Event Details</>} />
      <Route path="/profile" element={<>Profile</>} />


      {projectUserObject.userType === "employee" ? (
        <>
          <Route path="/add-event" element={<>add Event</>} />
          <Route path="/event/edit/:eventId" element={<>edit event</>} />
        </>
      ) : (
        ""
      )
      }
    </Routes >
  </div>
};
