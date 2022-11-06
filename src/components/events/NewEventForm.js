import { useEffect, useRef, useState } from "react";
import "./EventForm.css";

export const NewEventForm = () => {
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
        </section>
        <section className="preview-img-component">
          <img src={eventDetails.linkImage} />
          <p>img</p>
        </section>
      </section>
    </>
  );
};
