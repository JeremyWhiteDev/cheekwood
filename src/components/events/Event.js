export const Event = ({ id, name, summary, startDate, endDate }) => {
    return <section className="event" key={`event--${id}`}>
                        <div>Event: {name}</div>
                        <div>Summary: {summary}</div>
                        <div>Start Date: {startDate}</div>
                        <div>End Date: {endDate}</div>
                        
                    </section>
}