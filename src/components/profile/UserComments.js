import { Comment } from "./Comment";
import { useEffect, useState } from "react";

export const UserComments = () => {
  const [comments, setComments] = useState([]);

  /* --------------------------------- */
  const localCheekwoodUser = localStorage.getItem("project_user");
  const cheekwoodUserObject = JSON.parse(localCheekwoodUser);

  /* -------------Display-------------- */
  useEffect(() => {
    const fetchData = async () => {
      /* fetch Ticket */
      const response = await fetch(
        `http://localhost:8088/patronComments?&userId=${cheekwoodUserObject.id}&_expand=event`
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
                eventId={comment.event.id}
                myComment={comment.comment}
                link={comment.event.linkImage}
                currentUser={cheekwoodUserObject}
                commentObject={comment}
              />
            );
          })}
        </article>
      </section>
    </>
  );
};
