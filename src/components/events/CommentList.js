import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CommentList = () => {
  const [patronComments, setPatronComments] = useState([]);

  const [commentIsOpen, setCommentOpen] = useState(false);

  const [userComment, setUserComment] = useState({
    userId: 0,
    comment: "",
    eventId: 0,
  });

  const { eventId } = useParams();

  const [users, setUsers] = useState([]);

  const findUserName = (userId) => {
    const foundUser = users.find((user) => user.id === userId);
    return foundUser.fullName;
  };

  const localUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localUser);

  useEffect(() => {
    const fetchUsers = async () => {
      const userResponse = await fetch(`http://localhost:8088/users`);
      const userData = await userResponse.json();
      setUsers(userData);
    };
    fetchUsers();
    getEventComments();
  }, []);

  const getEventComments = async () => {
    const response = await fetch(
      `http://localhost:8088/patronComments?eventId=${parseInt(eventId)}`
    );
    const data = await response.json();
    setPatronComments(data);
  };

  const addComment = async (e) => {
    e.preventDefault();
    const userCommentCopy = { ...userComment };
    userCommentCopy.userId = projectUserObject.id;
    userCommentCopy.eventId = parseInt(eventId);

    const commentRespone = await fetch(`http://localhost:8088/patronComments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCommentCopy),
    });
    const jsonResponse = await commentRespone.json();
    setCommentOpen(false);
    getEventComments();
  };

  return (
    <>
      <section className="comment-list">
        <div className="mb-1 xl bold">Join the Conversation:</div>

        {commentIsOpen ? (
          <>
            <input
              id="commentField"
              className="comment-field"
              autoFocus
              value={userComment.comment}
              onChange={(event) => {
                const userCommentCopy = { ...userComment };
                userCommentCopy.comment = event.target.value;
                setUserComment(userCommentCopy);
              }}
            />
            <button
              className="comment-btn"
              onClick={(click) => addComment(click)}
            >
              Submit
            </button>
            <button
              className="comment-btn"
              onClick={() => setCommentOpen(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className=" comment-btn show-comment-btn"
            onClick={() => {
              setCommentOpen(!commentIsOpen);
            }}
          >
            Add Comment
          </button>
        )}

        {patronComments.map((comment) => (
          <div className="single-comment">
            <img
              className="comment-avatar"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            ></img>
            <div key={comment.id} className="comment">
              <div className="user-name">{findUserName(comment.userId)}</div>
              {comment.comment}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
