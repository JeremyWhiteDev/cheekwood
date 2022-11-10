import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  const [users, setUsers] = useState([]);

  const { eventId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const eventResponse = await fetch(
        `http://localhost:8088/events/${eventId}?_expand=eventType&_embed=patronComments`
      );
      const eventData = await eventResponse.json();
      const userResponse = await fetch(`http://localhost:8088/users`);
      const userData = await userResponse.json();

      setEvent(eventData);
      setUsers(userData);
    };
    fetchData();
  }, []);

  const findUserName = (userId) => {
    const foundUser = users.find((user) => user.id === userId);
    return foundUser.fullName;
  };

  return (
    <>
      <section className="event-header">
        <img
          className="event-header-img"
          src="https://cheekwood.org/wp-content/uploads/2020/01/Cheekwood-Mansion-Website-Scrollbar-Size-1135x425.jpg"
        />
        <div className="event-header-text">
          <h1 className="mb-1 bold">{event.name}</h1>
          <p className="mb-1  bold xl">Type of Event: {event.eventType.type}</p>
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
        <div className="event-info-section">
          <img className="event-details-img" src={event.linkImage}></img>

          <section>
            <p>{event.description}</p>
          </section>
        </div>
        <section className="comment-list">
          <div className="mb-1 xl bold">Join the Conversation:</div>

          {event.patronComments.map((comment) => (
            <div key={comment.id} className="comment">
              <div>{findUserName(comment.userId)} commented:</div>
              {comment.comment}
            </div>
          ))}
        </section>
      </article>
    </>
  );
};
