//import { useState } from "react";
//import { CommentEdit } from "./CommentEdit";
//import { UserComment } from "./UserComment";
export const CommentDelete = () => {

    const localCheekwoodUser = localStorage.getItem("project_user");
    const cheekwoodUserObject = JSON.parse(localCheekwoodUser);
   //console.log("comment object", commentObject);
    //console.log("current user:",currentUser);
    /* ------------------------delete-------------------------- */

    const deleteButton = () => {
        return (
            <>
                <button
                    onClick={() => {
                        fetch(
                            `http://localhost:8088/patronComments/${cheekwoodUserObject.id}`,
                            {
                                method: "DELETE",
                            }
                        ).then();
                    }}
                    className="btn btn-primary"
                >
                    Delete
                </button>
            </>
        );
    };

    return <>{deleteButton()}</>;
};

/* ------------------------edit-------------------------- */

{
    /*              const editButton = async () => {
        const copy = {
            userId: commentObject.userId,
            eventId: commentObject.eventId,
            comment: commentObject.commentObject,
        };
        const response = await fetch(
            `http://localhost:8088/patronComments/${commentObject.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(copy),
            }
        );
        return await response.json();
    };   */
}

/* -------------------------------------------------- */
/* ------------sss-------------- */

//     return (
//         <>
//             <section key={`comment__${id}`}>
//                 <h4>Event:{eventName}</h4>
//                 <p>{myComment}</p>
//                 <img
//                     src={link}
//                     width="100%"
//                     height="100%"
//                     className="comment_image"
//                 />
//                 <>
//                     <CommentEdit
//                         id={id}
//                         eventName={eventName}
//                         myComment={myComment}
//                         link={link}
//                         currentUser={currentUser}
//                         commentObject={commentObject}
//                     />

//                     {/* <CommentEdit />   */}
//                     {deleteButton()}
//                 </>
//             </section>
//         </>
//     );
// };

/* ------------sss-------------- */

/* 
import React, { Component } from 'react'
import EdiText from 'react-editext'

export default class App extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val)
  }

  render () {
    return (
      <EdiText
        type='text'
        value='What is real? How do you define real?'
        onSave={this.onSave}
      />
    )
  }
}

*/
