import { useEffect, useState } from "react";
import "./EventList.css";
import { Event } from "./Event";
import { useNavigate } from "react-router-dom";

export const EventList = ({}) => {
  const [events, setEvents] = useState([]);
  const [eventTypes, setEventTypes] = useState([]);
  const [dropDown, setDropDown] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const navigate = useNavigate();
  const localCheekwoodUser = localStorage.getItem("project_user");
  const cheekwoodUserObject = JSON.parse(localCheekwoodUser);

  useEffect(() => {
    const eventTypesFetch = async () => {
      const response = await fetch(`http://localhost:8088/eventTypes`);
      const eventData = await response.json();
      setEventTypes(eventData);
    };
    eventTypesFetch();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8088/events?_expand=eventType`
      );
      const data = await response.json();
      setEvents(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (dropDown > 0) {
      const selectEvent = events.filter(
        (event) => event.eventType.id === dropDown
      );
      setFilteredEvents(selectEvent);
    } else {
      setFilteredEvents(events);
    }
  }, [dropDown, events]);

  return (
    <article className="events">
      {
        <fieldset>
          <label htmlFor="eventType">Event Type:</label>
          <select
            name="eventType"
            required
            onChange={(event) => {
              const select = parseInt(event.target.value);
              // console.log(select);
              setDropDown(select);
            }}
          >
            <option id="procuctType--default" value={0}>
              All Events
            </option>
            {eventTypes.map((eventType) => {
              return (
                <option key={eventType.id} value={eventType.id}>
                  {eventType.type}
                </option>
              );
            })}
          </select>
        </fieldset>
      }
      {cheekwoodUserObject.userType === "employee" ? (
        <>
          <button onClick={() => navigate("/add-event")}>Add Event</button>
        </>
      ) : (
        <></>
      )}

      {filteredEvents.map((event) => (
        <Event
          key={`event--${event.id}`}
          id={event.id}
          name={event.name}
          summary={event.summary}
          startDate={event.startDate}
          endDate={event.endDate}
          eventType={event?.eventType?.type}
        />
      ))}
    </article>
  );
};
 