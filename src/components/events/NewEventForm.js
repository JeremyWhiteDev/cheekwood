import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./EventForm.css";

export const NewEventForm = ({ variant }) => {
  const [eventDetails, setEventDetails] = useState({
    name: "",
    summary: "",
    description: "",
    startDate: "",
    endDate: "",
    eventTypeId: 0,
    linkImage: "",
  });
  const [dateTypeIsAllDay, setDateType] = useState(false);

  const [eventTypes, setEventTypes] = useState([]);

  const { eventId } = useParams();
  // console.log(eventId);

  useEffect(() => {
    if (variant === "editForm") {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:8088/events/${eventId}`);
        const data = await response.json();
        console.log(data);
        setEventDetails(data);
      };
      fetchData();
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8088/eventTypes`);
      const data = await response.json();
      setEventTypes(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //fetch stringified entry obj
    const response = await fetch(`http://localhost:8088/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventDetails),
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    //fetch stringified entry obj
    const response = await fetch(`http://localhost:8088/events/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventDetails),
    });
  };

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:8088/events/${eventId}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <section className="event-form-component">
        <section className="event-form">
          <fieldset>
            <label htmlFor="eventName">Event Name:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-field"
              placeholder="Name of the event"
              value={eventDetails.name}
              onChange={(evt) => {
                const copy = { ...eventDetails };
                copy.name = evt.target.value;
                setEventDetails(copy);
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="eventSummary">Event Summary:</label>
            <input
              required
              type="text"
              className="form-field"
              placeholder="Brief one sentence summary of event"
              value={eventDetails.summary}
              onChange={(evt) => {
                const copy = { ...eventDetails };
                copy.summary = evt.target.value;
                setEventDetails(copy);
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="eventDescription">Event description:</label>
            <textarea
              required
              type="text"
              className="form-field"
              placeholder="Description"
              value={eventDetails.description}
              onChange={(evt) => {
                const copy = { ...eventDetails };
                copy.description = evt.target.value;
                setEventDetails(copy);
              }}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="eventType">Event Type:</label>
            <select
              name="eventType"
              required
              onChange={(event) => {
                const formCopy = { ...eventDetails };

                formCopy.eventTypeId = parseInt(event.target.value);
                setEventDetails(formCopy);
              }}
            >
              <option
                id="procuctType--default"
                value={eventDetails.eventTypeId}
              >
                {eventDetails.eventTypeId}
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
          <fieldset>
            <label htmlFor="eventTimeType">All Day Event?: </label>
            <input
              required
              type="checkbox"
              className="form-checkbox"
              checked={dateTypeIsAllDay}
              value={dateTypeIsAllDay}
              onChange={(evt) => {
                setDateType(!dateTypeIsAllDay);
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="eventSummary">Event start Time:</label>
            {dateTypeIsAllDay ? (
              <input
                required
                type="date"
                className="form-field"
                placeholder="Description"
                value={eventDetails.startDate}
                onChange={(evt) => {
                  const copy = { ...eventDetails };
                  copy.startDate = evt.target.value;
                  setEventDetails(copy);
                }}
              />
            ) : (
              <input
                required
                type="datetime-local"
                className="form-field"
                placeholder="Description"
                value={eventDetails.startDate}
                onChange={(evt) => {
                  const copy = { ...eventDetails };
                  copy.startDate = evt.target.value;
                  setEventDetails(copy);
                }}
              />
            )}
          </fieldset>
          <fieldset>
            <label htmlFor="eventSummary">Event End Time:</label>
            {dateTypeIsAllDay ? (
              <input
                required
                type="date"
                className="form-field"
                placeholder="Description"
                value={eventDetails.endDate}
                onChange={(evt) => {
                  const copy = { ...eventDetails };
                  copy.endDate = evt.target.value;
                  setEventDetails(copy);
                }}
              />
            ) : (
              <input
                required
                type="datetime-local"
                className="form-field"
                placeholder="Description"
                value={eventDetails.endDate}
                onChange={(evt) => {
                  const copy = { ...eventDetails };
                  copy.endDate = evt.target.value;
                  setEventDetails(copy);
                }}
              />
            )}
          </fieldset>
          <fieldset>
            <label htmlFor="eventPicture">Event Picture Link:</label>
            <input
              required
              type="text"
              className="form-field"
              placeholder="Link goes here"
              value={eventDetails.linkImage}
              onChange={(evt) => {
                const copy = { ...eventDetails };
                copy.linkImage = evt.target.value;
                setEventDetails(copy);
              }}
            />
          </fieldset>
          {variant === "editForm" ? (
            <>
              <button
                className="update-btn"
                onClick={(click) => {
                  handleUpdate(click);
                }}
              >
                Update
              </button>
              <button
                className="delete-btn"
                onClick={(click) => {
                  handleDelete(click);
                }}
              >
                Delete
              </button>
            </>
          ) : (
            <button
              className="submit-btn"
              onClick={(click) => {
                handleSubmit(click);
              }}
            >
              Submit
            </button>
          )}
        </section>
        <section className="preview-img-component">
          <h3>Event Image Preview</h3>
          <img className="preview-img" src={eventDetails.linkImage} />
        </section>
      </section>
    </>
  );
};
