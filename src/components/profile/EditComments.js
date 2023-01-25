import { useState } from "react";

export const CommentEdit = ({
  commentObject,
  currentUser,
  myComment,
  id,
  eventId,
}) => {
  const [editCommentM, updateEditComment] = useState({
    comment: myComment,
  });

  /* -------------Edit----------------- */

  const editComment = async (SendToAPI) => {
    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SendToAPI),
    };
    const response = await fetch(
      `http://localhost:8088/patronComments/${commentObject.id}`,
      fetchOptions
    );
    const responseJson = await response.json();
    return responseJson;
  };
  //here we are fetching the api to edit or replace (PUT) the current data
  //api is the url for the json file that will be changed
  /* ------------------------------ */
  const handleSaveButtonClick = (event) => {
    event.preventDefault();
    editComment(editCommentM);
  };
  /* ------------------------------ */
  return (
    <>
      <label htmlFor="comment">Comment:</label>
      <p>
        <script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js"></script>
      </p>
      <input
        required
        autoFocus
        type="text"
        style={{
          height: "2rem",
        }}
        className="form-control"
        value={editCommentM.comment}
        onChange={(evt) => {
          const copy = { ...editCommentM };
          copy.comment = evt.target.value;
          copy.eventId = eventId;
          copy.userId = currentUser.id;
          copy.id = id;
          updateEditComment(copy);
        }}
      />
      <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary"
      >
        Edit
      </button>
    </>
  );
};
