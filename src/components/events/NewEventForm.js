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

  const [filteredEventTypes, setFilteredEventTypes] = useState([]);

  const { eventId } = useParams();
  // console.log(eventId);

  useEffect(() => {
    if (variant === "editForm") {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:8088/events/${eventId}`);
        const data = await response.json();
        console.log(data);
        if (data.startDate.length < 11) {
          setDateType(true);
        }
        setEventDetails(data);
      };
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (variant === "editForm") {
      const otherEvents = eventTypes.filter(
        (eventType) => eventType.id !== eventDetails.eventTypeId
      );
      setFilteredEventTypes(otherEvents);
    } else {
      setFilteredEventTypes(eventTypes);
    }
  }, [eventTypes]);

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
    console.log(e.target.checkValidity());
    if (e.target.checkValidity()) {
      const response = await fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventDetails),
      });
    } else {
      e.target.reportValidity();
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:8088/events/${eventId}`, {
      method: "PUT",
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

  const displayCurrentEventType = () => {
    if (eventTypes.length > 0 && variant === "editForm") {
      const foundEvent = eventTypes.find(
        (eventType) => eventType.id === eventDetails.eventTypeId
      );
      return foundEvent.type;
    } else {
      return "Choose The Event Type";
    }
  };

  return (
    <>
      <section className="event-form-component">
        <section className="event-form">
          <form>
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
                  {displayCurrentEventType()}
                </option>
                {filteredEventTypes.map((eventType) => {
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
                  type="submit"
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
                type="submit"
                className="submit-btn"
                onClick={(click) => {
                  handleSubmit(click);
                }}
              >
                Submit
              </button>
            )}
          </form>
        </section>
        <section className="preview-img-component">
          <h3>Event Image Preview</h3>
          <img className="preview-img" src={eventDetails.linkImage} />
        </section>
      </section>
    </>
  );
};
