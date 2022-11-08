import { Route, Routes } from "react-router-dom";
import { AboutUs } from "../aboutUs/AboutUs";

export const ApplicationViews = () => {
  const localUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localUser);

  return (
    <Routes>
      {/* <Route path="/about-us" element={<>about-us </>} /> */}
      <Route path="/map" element={<>map</>} />
      <Route path="/events" element={<>EventList</>} />
      <Route path="/event/:eventId" element={<>Event Details</>} />
      <Route path="/profile" element={<>Profile</>} />
      <Route path="/aboutUs" element={<AboutUs/>} />


      {projectUserObject.userType === "employee" ? (
        <>
          <Route path="/add-event" element={<>add Event</>} />
          <Route path="/event/edit/:eventId" element={<>edit event</>} />
        </>
      ) : (
        ""
      )}
    </Routes>
  );
};
