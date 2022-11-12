import { Route, Routes } from "react-router-dom";
import { EventList } from "../events/EventList";
import { AboutUs } from "../aboutUs/AboutUs";
import { EventForm } from "../events/EventForm";
//import { Footer } from "../footer/Footer";
import { Map } from "../map/Map";
import { Profile } from "../profile/Profile";
import { QuestionForm } from "../questions/QuestionForm";

export const ApplicationViews = () => {
  const localUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localUser);

  return (
    <Routes>
      {/* <Route path="/about-us" element={<>about-us </>} /> */}
      {/* <Route path="/map" element={<>map</>} /> */}
      <Route path="/events" element={< EventList/>} />
      <Route path="/event/:eventId" element={<>Event Details</>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/map" element={<Map />} />
      <Route path="/questions" element={<QuestionForm/>} />
      {/* <Route path="/" element={<Footer/>} /> */}

      {projectUserObject.userType === "employee" ? (
        <>
          <Route path="/add-event" element={<EventForm />} />
          <Route
            path="/event/edit/:eventId"
            element={<EventForm variant="editForm" />}
          />
        </>
      ) : (
        ""
      )}

{/*       {projectUserObject.userType === "patron" ? (
        <>
          <Route path="/profile" element={<Profile />} />
        </>
      ) : (
        ""
      )} */}

    </Routes>
  );
};
