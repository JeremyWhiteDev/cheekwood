import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  });

  const { eventId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8088/events/${eventId}?_embed=patronComments`
      );
      const data = await response.json();
      setEvent(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <section>
        <img src={event.linkImage}></img>
      </section>
      <section>
        <p>{event.description}</p>
      </section>
      <section>
        {event.patronComments.map((comment) => `<p>${comment}<p>`)}
      </section>
    </>
  );
};
