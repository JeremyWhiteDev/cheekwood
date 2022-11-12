//import { useState } from "react";
import { CommentEdit } from "./EditComments";
export const Comment = ({
    id,
    myComment,
    eventName,
    link,
    currentUser,
    commentObject,
}) => {
    console.log("comment object",commentObject);
    console.log("current user:",currentUser);
    //
    /* ------------------------delete-------------------------- */

    const deleteButton = () => {
        return (
            <>
                <button
                    onClick={() => {
                        fetch(
                            `http://localhost:8088/patronComments/${commentObject.id}`,
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

    return (
        <>
            <section key={`comment__${id}`} className="comment_card">
                <h2>{eventName}</h2>
                <p>{myComment}</p>
                <img
                    src={link}
                    width="100%"
                    height="100%"
                    className="comment_image"
                />
                <>
                    <CommentEdit />  
                    {deleteButton()}
                </>
            </section>
        </>
    );
};

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