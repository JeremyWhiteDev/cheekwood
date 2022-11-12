
import { useEffect, useState } from "react";

export const CommentEdit = ({ commentObject, currentUser,myComment,id }) => {
    const [editCommentM, updateEditComment] = useState({
        comment: "",
    });

    /* ------------------------------ */
    /* async */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                //`http://localhost:8088/patronComments/${commentObject.id}`
                `http://localhost:8088/patronComments?&userId=${currentUser.id} `
            );
            const data = await response.json();
            //console.log(data);
            updateEditComment(data[0]);
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




// <CommentEdit
// id={id}
// eventName={eventName}
// myComment={myComment}
// link={link}
// currentUser={currentUser}
// commentObject={commentObject}
// />


