import { useEffect, useRef, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { useParams } from "react-router-dom";

export const CommentList = () => {
  const [patronComments, setPatronComments] = useState([]);

  const [commentIsOpen, setCommentOpen] = useState(false);

  const [userComment, setUserComment] = useState({
    userId: 0,
    comment: "",
    eventId: 0,
  });

  const [commentPageNumber, setCommentPage] = useState({ currentPage: 1 });
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
      const response = await fetch(
        `http://localhost:8088/patronComments?eventId=${parseInt(
          eventId
        )}&_sort=id&_order=desc&_page=1&_limit=5`
      );
      const data = await response.json();
      setPatronComments(data);
    };
    fetchUsers();
  }, []);

  const getEventComments = async () => {
    // console.log(commentPageNumber);
    const response = await fetch(
      `http://localhost:8088/patronComments?eventId=${parseInt(
        eventId
      )}&_sort=id&_order=desc&_page=${commentPageNumber.currentPage}&_limit=5`
    );
    const data = await response.json();
    // console.log(data);
    const newData = patronComments.concat(data);
    setPatronComments(newData);
  };
  useEffect(() => {
    getEventComments();
  }, [commentPageNumber]);

  const addComment = async (e) => {
    e.preventDefault();
    e.stopPropagation();
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
    setCommentOpen(false);
    setCommentPage({ currentPage: 1 });
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
              onClick={(click) => {
                addComment(click);
              }}
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
          <div className="single-comment" key={comment.id}>
            <img
              className="comment-avatar"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            ></img>
            <div className="comment">
              <div className="user-name">{findUserName(comment.userId)}</div>
              {comment.comment}
            </div>
          </div>
        ))}
        {/* <button
          className="comment-btn show-comment-btn"
          onClick={async (event) => {
            // setCommentPage((prev) => prev.currentPage + 1);
            addComment(event);
          }}
        >
          Show More Comments
        </button> */}
      </section>
    </>
  );
};
