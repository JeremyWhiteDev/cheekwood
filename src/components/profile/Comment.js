import { CommentEdit } from "./EditComments";
export const Comment = ({
  id,
  myComment,
  eventName,
  link,
  currentUser,
  commentObject,
  eventId,
}) => {
  /* ------------------------delete-------------------------- */

  const deleteButton = () => {
    return (
      <>
        <button
          onClick={() => {
            fetch(`http://localhost:8088/patronComments/${commentObject.id}`, {
              method: "DELETE",
            }).then();
          }}
          className="btn btn-primary"
        >
          Delete
        </button>
      </>
    );
  };

  return (
    <>
      <section key={`comment__${id}`} className="comment_card">
        <h2>{eventName}</h2>
        <p>{myComment}</p>
        <img src={link} width="100%" height="100%" className="comment_image" />
        <>
          <CommentEdit
            id={id}
            eventName={eventName}
            myComment={myComment}
            link={link}
            currentUser={currentUser}
            commentObject={commentObject}
            eventId={eventId}
          />
          {deleteButton()}
        </>
      </section>
    </>
  );
};
