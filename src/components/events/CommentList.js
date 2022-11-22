import { useEffect, useRef, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { useParams } from "react-router-dom";
import { Comment } from "./Comment";

export const CommentList = ({ eventId }) => {
  const [patronComments, setPatronComments] = useState([]);

  const [commentIsOpen, setCommentOpen] = useState(false);

  const [userComment, setUserComment] = useState({
    userId: 0,
    comment: "",
    eventId: 0,
  });

  const [commentPageNumber, setCommentPage] = useState({ currentPage: 1 });
  const [totalCommentLength, setTotalCommentLength] = useState(0);

  // const { eventId } = useParams();

  const [users, setUsers] = useState([]);

  const localUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localUser);

  useEffect(() => {
    getInitialEventComments();
  }, []);

  const getInitialEventComments = async () => {
    const userResponse = await fetch(`http://localhost:8088/users`);
    const userData = await userResponse.json();
    setUsers(userData);

    const getEventComments = async () => {
      // console.log(commentPageNumber);
      const response = await fetch(
        `http://localhost:8088/patronComments?eventId=${eventId}&_sort=id&_order=desc&_page=1&_limit=5`
      );

      const commentLength = JSON.parse(response.headers.get("X-Total-Count"));
      console.log(commentLength);
      setTotalCommentLength(commentLength);

      const data = await response.json();
      // console.log(data);
      // const newData = patronComments.concat(data);
      setPatronComments(data);
    };
    getEventComments();
  };
  useEffect(() => {
    const getEventComments = async () => {
      // console.log(commentPageNumber);
      const commentResponse = await fetch(
        `http://localhost:8088/patronComments?eventId=${eventId}&_sort=id&_order=desc&_page=${commentPageNumber.currentPage}&_limit=5`
      );

      const commentData = await commentResponse.json();
      // console.log(commentData);

      if (commentData.length > 0) {
        const newData = patronComments.concat(commentData);
        setPatronComments(newData);
      }
    };
    getEventComments();
  }, [commentPageNumber]);

  const addComment = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const userCommentCopy = { ...userComment };
    userCommentCopy.userId = projectUserObject.id;
    userCommentCopy.eventId = eventId;

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
          <Comment
            commentId={comment.id}
            key={`comment--${comment.id}`}
            comment={comment.comment}
            userId={comment.userId}
            users={users}
            loggedInUserId={projectUserObject.id}
            loggedInUserType={projectUserObject.userType}
            getEventComments={getInitialEventComments}
            eventId={eventId}
          />
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
