import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CommentEdit = ({
  commentObject,
  currentUser,
  myComment,
  id,
  eventId,
}) => {
  const { commentId } = useParams();
  const [editCommentM, updateEditComment] = useState({
    comment: myComment,
  });

  /* ------------------------------ */
  /* async */
  useEffect(() => {
    const fetchData = async () => {
      //   const response = await fetch(
      //     //`http://localhost:8088/patronComments/${commentObject.id}`
      //     `http://localhost:8088/patronComments?&userId=${commentObject.userId} `
      //   );
      //   const data = await response.json();
      //   //console.log(data);
      //   updateEditComment(data[0]);
    };
    fetchData();
  }, []);
  /* ------------------------------ */

  /* -------------Edit----------------- */
  /* async */
  const editComment = async (SendToAPI) => {
    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SendToAPI),
    };
    const response = await fetch(
      //`http://localhost:8088/patronComments/edit/${commentId}`,
      `http://localhost:8088/patronComments/${commentObject.id}`,
      //`http://localhost:8088/patronComments?/${editCommentM.id}`,
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
          copy.eventId = eventId;
          copy.comment = evt.target.value;
          copy.userId = currentUser.id;
          copy.id = id;
          //   console.log(copy);
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
