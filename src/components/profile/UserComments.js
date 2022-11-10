import { Comment } from "./Comment";
import { useEffect, useState } from "react";

export const UserComments = () => {
    const [comments, setComments] = useState([]);

    /* --------------------------------- */
    const localCheekwoodUser = localStorage.getItem("project_user");
    const cheekwoodUserObject = JSON.parse(localCheekwoodUser);
    console.log(cheekwoodUserObject);
    /* -------------Display-------------- */
    useEffect(() => {
        const fetchData = async () => {
            /* fetch Ticket */
            const response = await fetch(
                `http://localhost:8088/patronComments?&userId=${cheekwoodUserObject.id}&_expand=event`
                //`http://localhost:8088/patronComments?&userId=${cheekwoodUserObject.id} `
            );
            const CommentArray = await response.json();
            setComments(CommentArray);
        };
        fetchData();
    }, []);
    return (
        <>
            <section className="comment_form">
                <h2>Favorites</h2>
                <article>
                    {comments.map((comment) => {
                        return (
                            <Comment
                                key={`comment__${comment.id}`}
                                id={comment.userId}
                                eventName={comment.event.name}
                                myComment={comment.comment}
                                link={comment.event.linkImage}
                                currentUser={cheekwoodUserObject}
                                commentObject={comment}
                            />
                        );
                    })}
                </article>
            </section>

            {/*  <section className="comment_form">
                <h2>Favorites</h2>
                <article>
                    {comments.map((comment) => {
                        return (
                            <section key={comment.id} className="comment_card">
                            <h2>{comment.event.name}</h2>
                                <p>{comment.comment}</p>
                                <img
                                    src= {comment.event.linkImage}
                                    width="100%"
                                    height="100%"
                                    className="comment_image"
                                />
                                <button
                                    onClick={() => {}}
                                className="btn btn-primary"
                            >
                                Edit
                                </button>
                                <button
                                onClick={() => {}}
                            className="btn btn-primary"
                        >
                            Delete
                        </button>
                            </section>
                        );
                    })}
                </article>
            </section> */}
        </>
    );
};
//http://localhost:8088/patronComments?&userId=2&_expand=event
/* 
          <img
            src=`${comment.event.linkImage}`
            width="10%"
            height="10%"
            className="about_image"
          />
*/
