// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// //import {commentObject, currentUser, myComment} from "./UserComments";

// export const CommentEdit = ({ commentObject, currentUser, myComment }) => {
//     const { commentId_M } = useParams();
//     const [editCommentM, updateEditComment] = useState({
//         comment: "",
//     });

//     /* ------------------------------ */
//     console.log("MMM", myComment);
//     console.log(commentObject);
//     console.log("CUMM", currentUser);

//     const navigate = useNavigate();
//     /* --------------display---------------- */
//     /* async */
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(
//                 `http://localhost:8088/patronComments?&userId=${currentUser.id}`
//                 //`http://localhost:8088/patronComments?&userId=${currentUser.id}&_expand=event`
//                 //`http://localhost:8088/patronComments?usrId=${currentUser.id}`
//                 //`http://localhost:8088/patronComments?/userId=${commentObject.userId} `
//             );
//             const data = await response.json();
//             console.log("dataMMM", data);
//             updateEditComment(data[0]);
//         };
//         fetchData();
//     }, []);
//     /* ------------------------------ */

//     /* -------------Edit----------------- */
//     /* async */
//     const editComment = async (SendToAPI) => {
//         const fetchOptions = {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(SendToAPI),
//         };
//         const response = await fetch(
//             `http://localhost:8088/patronComments?&userId=${currentUser.id}&id=${commentId_M}`,
//             //`http://localhost:8088/patronComments/${commentId_M}`,
//             //`http://localhost:8088/patronComments/${commentObject.id}`,
//             //`http://localhost:8088/patronComments?userId=3}`,
//             fetchOptions
//         );
//         const responseJson = await response.json();
//         return responseJson;
//     };
//     //here we are fetching the api to edit or replace (PUT) the current data
//     //api is the url for the json file that will be changed
//     /* ------------------------------ */
//     const handleSaveButtonClick = (event) => {
//         event.preventDefault();
//         editComment(editCommentM);
//         //navigate("/profile");
//     };
//     /* ------------------------------ */
//     return (
//         <>
//             <label htmlFor="comment">
//                 <h5>Comment:</h5>
//             </label>

//             <input
//                 required
//                 autoFocus
//                 type="text"
//                 style={{
//                     height: "3rem",
//                 }}
//                 className="form-control"
//                 value={editCommentM.comment}
//                 onChange={(evt) => {
//                     const copy = { ...editCommentM };
//                     copy.comment = evt.target.value;
//                     updateEditComment(copy);
//                 }}
//             />
//             <button
//                 onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
//                 className="btn btn-primary"
//             >
//                 Edit
//             </button>
//             <button
//                 onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
//                 className="btn btn-primary"
//             >
//                 Save
//             </button>
//         </>
//     );
// };

// /* 
// {
//             "id": 4,
//             "userId": 3,
//             "eventId": 1,
//             "comment": "This is a beautiful and very lively gallery."
//         },
//         {
//             "id": 5,
//             "userId": 3,
//             "eventId":3 ,
//             "comment": "This is a beautiful and very lively gallery."
//         },

// */
