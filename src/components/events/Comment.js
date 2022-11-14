import { useState } from "react";

export const Comment = ({
  commentId,
  comment,
  userId,
  users,
  loggedInUserId,
  getEventComments,
  eventId,
}) => {
  const [editIsOpen, setEditIsOpen] = useState(false);

  const [commentBody, setCommentBody] = useState(comment);
  const findUserName = (userId) => {
    const foundUser = users.find((user) => user.id === userId);
    return foundUser?.fullName;
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    const updatedComment = {
      userId: userId,
      comment: commentBody,
      eventId: eventId,
    };
    const updateResponse = await fetch(
      `http://localhost:8088/patronComments/${commentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedComment),
      }
    );
    const jsonResponse = await updateResponse.json();
    setEditIsOpen(false);
    getEventComments();
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEditIsOpen(false);
    setCommentBody(comment);
  };

  return (
    <>
      <div className="w-600 center single-comment" key={commentId}>
        <img
          className="comment-avatar"
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
        ></img>
        <div className="comment">
          <div className="comment-title">
            <div className="user-name">{findUserName(userId)}</div>
            {loggedInUserId === userId ? (
              <>
                <div>
                  {editIsOpen ? (
                    <>
                      <button
                        className=" border-none border-bottom mr-5 hover:pointer-cursor"
                        onClick={(click) => handleEdit(click)}
                      >
                        Update
                      </button>
                      <button
                        className=" border-none border-bottom mr-5 hover:pointer-cursor"
                        onClick={(click) => handleCancel(click)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className=" border-none border-bottom mr-5 hover:pointer-cursor"
                        onClick={() => setEditIsOpen(true)}
                      >
                        Edit
                      </button>
                      <button
                        className="border-none border-bottom mr-5 hover:pointer-cursor"
                        onClick={(click) => handleDelete(click)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          {editIsOpen ? (
            <input
              className="comment-field"
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
            ></input>
          ) : (
            `${comment}`
          )}
        </div>
      </div>
    </>
  );
};
