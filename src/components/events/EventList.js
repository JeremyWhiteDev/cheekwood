import { useEffect, useState } from "react"
import "./EventList.css"
import { Event } from "./Event"
import { useNavigate } from "react-router-dom"

export const EventList = ({}) => {
    
    const [events, setEvents] = useState([])
    const [eventTypes, setEventTypes] = useState([]);
    const [dropDown, setDropDown] = useState(0);
    const [filteredEvent, setFilteredEvent] = useState([]);
    const navigate = useNavigate()
    const localCheekwoodUser= localStorage.getItem("project_user")
    const cheekwoodUserObject = JSON.parse(localCheekwoodUser)

    useEffect(() => {
        const eventTypesFetch = async () => {
            const response = await fetch (`http://localhost:8088/eventTypes`)
            const eventData = await response.json();
            setEvents(eventData);
        
        };
        eventTypesFetch();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`http://localhost:8088/events?_expand=eventType`);
          const data = await response.json();
          setEventTypes(data);
        };
        fetchData();
      }, []);

      useEffect(() => {
        if (dropDown > 0) {
            const selectEvent = eventTypes.filter(event => event.eventType.id === dropDown)
            setFilteredEvent(selectEvent)
        } else {
            setFilteredEvent(eventTypes)
        }
      },[dropDown, eventTypes]
      )

    
        return <article className="events">
            {
               <fieldset>
               <label htmlFor="eventType">Event Type:</label>
               <select
                 name="eventType"
                 required
                 onChange={(event) => {
                   
                   const select = parseInt(event.target.value);
                   console.log(select)
                  setDropDown(select);
                 }}
               >
                 <option
                   id="procuctType--default"
                   value={dropDown}
                 >
                   All Events
                 </option>
                 {events.map((events) => {
                   
                   return (
                     <option key={events.id} value={events.id}>
                       {events.type}
                     </option>
                   );
                 })}
               </select>
             </fieldset>
                
            }
            {
               cheekwoodUserObject.userType === "employee"
                ?<>
                    <button onClick={ () => navigate("")}>Edit Event</button>
                </>
                :<></>

            }

            {
                filteredEvent.map(event => <Event key={`event--${event.id}`}
                    id={event.id} 
                    name={event.name} 
                    summary={event.summary} 
                    startDate={event.startDate} 
                    endDate={event.endDate} 
                    eventType={event?.eventType?.type}
                    />)
            }
        </article>
}