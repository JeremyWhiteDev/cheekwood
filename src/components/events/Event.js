import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Events.css"

export const Event = () => {

    const navigate = useNavigate()

    const localUser = localStorage.getItem("project_user");
    const projectUserObject = JSON.parse(localUser);

    const [events, setEvents] = useState([])
    const [patronComments, setPatronComments] = useState([])
    const [favorited, setFavorited] = useState(false)

    useEffect(
        () => {
            const fetchPatronComments = async () => {
                const fetchData = await fetch(`http://localhost:8088/patronComments`)
                const fetchJson = await fetchData.json()
                setPatronComments(fetchJson)
            }
            fetchPatronComments()
        }, []
    )

    useEffect(
        () => {
            const fetchEvent = async () => {
                const fetchData = await fetch(`http://localhost:8088/events?_embed=patronSavedEvents&_expand=eventType`)
                const fetchJson = await fetchData.json()
                setEvents(fetchJson)
            }
            fetchEvent()
        },
        [, favorited]
    )

    const countFavorites = (obj) => {
        const copy = obj.patronSavedEvents.map(x => ({ ...x }))
        return copy
    }

    const countComments = (obj) => {
        const copy = patronComments.map(x => ({ ...x }))
        return copy.filter(x => x.eventId === obj.id).length
    }


    const postOrDelete = async (favorite) => {
        if (favorite.patronSavedEvents.filter(x => x.userId === projectUserObject.id).length > 0) {
            await deleteFavorite(favorite.patronSavedEvents.filter(x => x.userId === projectUserObject.id)[0].id)
        } else {
            const favObj = {
                userId: projectUserObject.id,
                eventId: favorite.id
            }
            await postFavorite(favObj)
        }

        setFavorited(!favorited)
    }



    const postFavorite = async (favorite) => {

        const fetchData = await fetch(`http://localhost:8088/patronSavedEvents`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(favorite)
        })

        setFavorited(!favorited)
    }

    const deleteFavorite = async (favorite) => {
        const fetchData = await fetch(`http://localhost:8088/patronSavedEvents/${favorite}`, {
            method: "DELETE"
        })

    }


    return <>
        <div className="eventCardContainer">{events.map(event => {
            return <>
                <section className="eventCard">
                    <div className="cardDetails">
                        <img src={event.linkImage} alt="" className="eventImg" />
                        <header className="eventHeader">
                            <ul>
                                <li className="eventName">{event.name}</li>
                                <li className="eventDates">{event.startDate} - {event.endDate}</li>
                                <li className="summary">{event.summary}</li>
                            </ul>
                            <div className="allTheButtons">
                                <div className="favoriteAndComment">
                                    <div className={event.patronSavedEvents.filter(x => x.userId === projectUserObject.id).length > 0 ? " favorites favorited" : "favorites "}

                                        id={`heartIcon--${event.id}`}>
                                        <a href="#"><img src={require("./images/favorite.png")}
                                            className="button"
                                            onClick={
                                                () => {

                                                    postOrDelete(event)


                                                }
                                            } /></a>
                                        <div className="counter favCounter">{countFavorites(event).length}</div>
                                    </div>
                                    <div className="comments">
                                        <a href="#"><img src={require("./images/comment-box.png")}
                                            className="button" onClick={
                                                () => {
                                                    navigate("/")
                                                }
                                            } /></a>
                                        <div className="counter commentCounter">{countComments(event)}</div></div>
                                </div>
                                <div className="editAndViewButtons">
                                    {projectUserObject.userType === "employee" ? <button
                                        onClick={
                                            () => {
                                                navigate("/")
                                            }
                                        }>EDIT</button> : ""}
                                    <button
                                        onClick={
                                            () => {
                                                navigate("/")
                                            }
                                        }>MORE INFO</button>
                                </div>
                            </div>
                        </header>



                    </div>


                </section>
            </>
        })
        }
        </div>
    </>
}