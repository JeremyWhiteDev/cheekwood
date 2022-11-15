import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import "./Events.css";

export const Event = ({
  image,
  name,
  startDate,
  endDate,
  summary,
  patronSavedEvent,
  id,
  fetchEvents,
  events2,
  fetchEvents2,
}) => {
  const navigate = useNavigate();

  const [modalIsActive, setModalIsActive] = useState(false);

  const localUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localUser);

  const [patronComments, setPatronComments] = useState([]);

  useEffect(() => {
    const fetchPatronComments = async () => {
      const fetchData = await fetch(`http://localhost:8088/patronComments`);
      const fetchJson = await fetchData.json();
      setPatronComments(fetchJson);
    };
    fetchPatronComments();
  }, []);

  const countFavorites = () => {
    const copy = filterEvents2[0].patronSavedEvents.map((x) => ({ ...x }));
    return copy;
  };

  const countComments = () => {
    const copy = patronComments.map((x) => ({ ...x }));
    return copy.filter((x) => x.eventId === id).length;
  };

  const postOrDelete = async (event) => {
    event.preventDefault();
    if (filterEvents2[0]?.patronSavedEvents === undefined) {
      return "";
    } else {
      if (
        filterEvents2[0].patronSavedEvents.filter(
          (x) => x.userId === projectUserObject.id
        ).length > 0
      ) {
        await deleteFavorite(
          filterEvents2[0].patronSavedEvents.filter(
            (x) => x.userId === projectUserObject.id
          )[0].id
        );
      } else {
        const favObj = {
          userId: projectUserObject.id,
          eventId: id,
        };
        await postFavorite(favObj);
      }
      fetchEvents2();
    }
  };

  const mapEvents2 = events2.map((x) => ({ ...x }));
  const filterEvents2 = mapEvents2.filter((x) => x.id === id);

  const postFavorite = async (favorite) => {
    const fetchData = await fetch(`http://localhost:8088/patronSavedEvents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favorite),
    });
  };

  const deleteFavorite = async (favorite) => {
    const fetchData = await fetch(
      `http://localhost:8088/patronSavedEvents/${favorite}`,
      {
        method: "DELETE",
      }
    );
  };

  return (
    <>
      {filterEvents2[0]?.patronSavedEvents === undefined ? (
        <></>
      ) : (
        <div className="eventCardContainer">
          <section className="eventCard">
            <div className="cardDetails">
              <img src={image} alt="" className="eventImg" />
              <header className="eventHeader">
                <ul>
                  <li className="eventName">{name}</li>
                  <li className="eventDates">
                    {new Date(startDate).toLocaleDateString()} -{" "}
                    {new Date(endDate).toLocaleDateString()}
                  </li>
                  <li className="summary">{summary}</li>
                </ul>
                <div className="allTheButtons">
                  <div className="favoriteAndComment">
                    <div
                      className={
                        filterEvents2[0].patronSavedEvents.filter(
                          (x) => x.userId === projectUserObject.id
                        ).length > 0
                          ? " favorites favorited"
                          : "favorites "
                      }
                      id={`heartIcon--${id}`}
                    >
                      <a href="#">
                        <img
                          src={require("./event-images/favorite.png")}
                          className="button"
                          onClick={(clickEvent) => {
                            postOrDelete(clickEvent);
                          }}
                        />
                      </a>
                      <div className="counter favCounter">
                        {countFavorites().length}
                      </div>
                    </div>
                    <div className="comments">
                      <a href="#">
                        <img
                          src={require("./event-images/comment-box.png")}
                          className="button"
                          onClick={() => {
                            // navigate(`/event/${id}`);
                            setModalIsActive(true);
                          }}
                        />
                      </a>
                      <div className="counter commentCounter">
                        {countComments()}
                      </div>
                    </div>
                  </div>
                  <div className="editAndViewButtons">
                    {projectUserObject.userType === "employee" ? (
                      <button
                        onClick={() => {
                          navigate(`/event/edit/${id}`);
                        }}
                      >
                        EDIT
                      </button>
                    ) : (
                      ""
                    )}
                    <button
                      onClick={() => {
                        navigate(`/event/${id}`);
                      }}
                    >
                      MORE INFO
                    </button>
                  </div>
                </div>
              </header>
            </div>
          </section>
        </div>
      )}
      <Modal
        isActive={modalIsActive}
        setModalIsActive={setModalIsActive}
        eventId={id}
      />
    </>
  );
};
