import { useEffect, useState } from "react"
import "./EventList.css"
import { Event } from "./Event"
import { useNavigate } from "react-router-dom"

export const EventList = () => {
    const [events, setEvents] = useState([])
    const [filteredEvents, setFiltered] = useState([])
    const navigate = useNavigate()
    const onClick = () => setFiltered(!filteredEvents);
    const localCheekwoodUser= localStorage.getItem("project_user")
    const cheekwoodUserObject = JSON.parse(localCheekwoodUser)

    

    useEffect(
        () => {
            fetch(`http://localhost:8088/events?_expand=eventType`)
                .then(response => response.json())
                .then((eventsArray) => {
                    setEvents(eventsArray)
                })
        },
        []
    )

    
        return <article className="events">
            {
                <button onClick={onClick} className="menu-trigger">Event Type</button>
                
            }
            {
               cheekwoodUserObject.userType === "employee"
                ?<>
                    <button onClick={ () => navigate("")}>Edit Event</button>
                </>
                :<></>

            }

            {
                events.map(event => <Event key={`event--${event.id}`}
                    id={event.id} 
                    name={event.name} 
                    summary={event.summary} 
                    startDate={event.startDate} 
                    endDate={event.endDate} />)
            }
        </article>
}