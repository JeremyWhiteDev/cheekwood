import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CommentList } from "./CommentList";
import "./EventDetails.css";

export const EventDetails = () => {
  const [event, setEvent] = useState({
    name: "",
    summary: "",
    description: "",
    startDate: "",
    endDate: "",
    eventTypeId: 0,
    linkImage: "",
    patronComments: [],
    eventType: {},
  });
  const [saved, setSaved] = useState(false);
  const [savedEvent, setSavedEvent] = useState({});
  const { eventId } = useParams();

  const localUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localUser);

  const fetchSaveStatus = async () => {
    const patronSavedResponse = await fetch(
      `http://localhost:8088/patronSavedEvents?eventId=${parseInt(
        eventId
      )}&userId=${projectUserObject.id}`
    );
    const savedEventJson = await patronSavedResponse.json();
    if (savedEventJson.length > 0) {
      setSavedEvent(savedEventJson[0]);
      //   console.log(savedEvent);
      setSaved(true);
    } else {
      setSaved(false);
    }
  };

  const saveOrUnsave = async (e) => {
    e.preventDefault();
    if (saved) {
      setSaved(!saved);
      const deleteSavedResponse = await fetch(
        `http://localhost:8088/patronSavedEvents/${savedEvent.id}`,
        { method: "DELETE" }
      );
    } else {
      setSaved(!saved);
      const saveData = {
        userId: projectUserObject.id,
        eventId: parseInt(eventId),
      };
      const addSavedResponse = await fetch(
        `http://localhost:8088/patronSavedEvents`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveData),
        }
      );
      fetchSaveStatus();
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const eventResponse = await fetch(
        `http://localhost:8088/events/${eventId}?_expand=eventType&_embed=patronComments`
      );
      const eventData = await eventResponse.json();

      setEvent(eventData);
      fetchSaveStatus();
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="event-header">
        <img
          className="event-header-img"
          src="https://cheekwood.org/wp-content/uploads/2020/01/Cheekwood-Mansion-Website-Scrollbar-Size-1135x425.jpg"
        />
        <div className="event-header-text text-white">
          <h1 className="mb-1 bold">{event.name}</h1>
          <p className="mb-1  bold xl text-white">
            Type of Event: {event.eventType.type}
          </p>
          <p className="mb-1  bold xl">Price: TBD</p>
          <p className="event-time ">
            {event.startDate.length > 10 ? (
              <>
                {new Date(event.startDate).toLocaleString()} -
                {new Date(event.endDate).toLocaleString()}
              </>
            ) : (
              <>
                {new Date(event.startDate).toLocaleDateString()} -{" "}
                {new Date(event.endDate).toLocaleDateString()}
              </>
            )}
          </p>
        </div>
      </section>
      <article className="event-details-container">
        <section className="event-description">
          <p>{event.description}</p>
          <div className="button-options ">
            <button
              className="event-btn save-btn"
              onClick={(click) => saveOrUnsave(click)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`svg-m ${saved ? "svg-saved" : "svg-not-saved"}`}
                version="1.1"
                viewBox="276 230 183 200"
                width="21"
                height="21"
              >
                <path
                  d="M 366 286.125 C 342.7515 234.41842 276.84905 246.2882 276.5 306.12498 C 276.15095 339.78296 307.96462 351.65108 328.94163 364.9844 C 349.21875 377.82987 363.9021 395.39062 366 402.54513 C 368.0979 395.39062 384.17924 377.1805 403.05837 364.33504 C 423.68633 350.1892 455.84905 338.80726 455.5 306.12498 C 455.15095 245.80036 388.02595 236.2083 366 286.125 Z"
                  fill="current"
                />
                <path
                  d="M 366 286.125 C 342.7515 234.41842 276.84905 246.2882 276.5 306.12498 C 276.15095 339.78296 307.96462 351.65108 328.94163 364.9844 C 349.21875 377.82987 363.9021 395.39062 366 402.54513 C 368.0979 395.39062 384.17924 377.1805 403.05837 364.33504 C 423.68633 350.1892 455.84905 338.80726 455.5 306.12498 C 455.15095 245.80036 388.02595 236.2083 366 286.125 Z"
                  stroke="gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                />
              </svg>
              {saved ? "Saved" : "Save"}
            </button>
            <button
              className="event-btn"
              onClick={() => {
                navigate("/events");
              }}
            >
              Back to Events
            </button>
          </div>
        </section>
        <div className="event-info-section">
          <img className="event-details-img" src={event.linkImage}></img>
        </div>
      </article>
      <div className="comment-container">
        <CommentList className="center" eventId={eventId} />
      </div>
    </>
  );
};
