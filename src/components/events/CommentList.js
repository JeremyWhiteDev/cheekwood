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
  const [totalCommentLength, setTotalCommentLength] = useState(0);
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

      const commentLength = JSON.parse(response.headers.get("X-Total-Count"));
      setTotalCommentLength(commentLength);

      const data = await response.json();
      console.log(data);
      setPatronComments(data);
    };
    fetchUsers();
  }, []);

  const getEventComments = async () => {
    console.log(commentPageNumber);
    const commentResponse = await fetch(
      `http://localhost:8088/patronComments?eventId=${parseInt(
        eventId
      )}&_sort=id&_order=desc&_page=${commentPageNumber.currentPage}&_limit=5`
    );
    const commentData = await commentResponse.json();
    // console.log(commentData);

    if (commentData.length > 0) {
      const newData = patronComments.concat(commentData);
      setPatronComments(newData);
    }
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
    setPatronComments([]);
    setUserComment({
      userId: 0,
      comment: "",
      eventId: 0,
    });
    setCommentPage({ currentPage: 1 });
  };

  return (
    <>
      <section className="comment-list">
        <div className="flex w-600 center space-between align-center">
          <div className="mb-1 xl bold w-300 center-y">
            Join the Conversation:
          </div>
          <div className="right">
            Comments:{" "}
            <span className="rounded bg-red p-1 text-white">
              {totalCommentLength}
            </span>
          </div>
        </div>

        {commentIsOpen ? (
          <>
            <input
              id="commentField"
              className="comment-field center w-100"
              autoFocus
              value={userComment.comment}
              onChange={(event) => {
                const userCommentCopy = { ...userComment };
                userCommentCopy.comment = event.target.value;
                setUserComment(userCommentCopy);
              }}
            />
            <div className="comment-button-row">
              <button
                className="comment-btn "
                onClick={(click) => {
                  addComment(click);
                }}
              >
                Submit
              </button>
              <button
                className="comment-btn "
                onClick={() => setCommentOpen(false)}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <button
            className=" comment-btn w-600 show-comment-btn center"
            onClick={() => {
              setCommentOpen(!commentIsOpen);
            }}
          >
            Add Comment
          </button>
        )}

        {patronComments.map((comment) => (
          <div className="w-600 center single-comment" key={comment.id}>
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
        {totalCommentLength > patronComments.length ? (
          <button
            className="comment-btn w-600 show-comment-btn center"
            onClick={(event) => {
              const prevObj = { ...commentPageNumber };
              prevObj.currentPage += 1;
              setCommentPage(prevObj);
              // addComment(event);
            }}
          >
            Show More Comments
          </button>
        ) : (
          ""
        )}
      </section>
    </>
  );
};
