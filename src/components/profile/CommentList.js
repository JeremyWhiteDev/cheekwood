import { CommentDelete } from "./CommentDelete";
import { useEffect, useState } from "react";
import { UserComment } from "./UserComment";

export const CommentList = () => {
    const [comments, setComments] = useState([]);

    /* --------------------------------- */
    const localCheekwoodUser = localStorage.getItem("project_user");
    const cheekwoodUserObject = JSON.parse(localCheekwoodUser);
    //console.log("CHMM", cheekwoodUserObject);
    /* -------------Display-------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8088/patronComments?&userId=${cheekwoodUserObject.id}&_expand=event`
                //`http://localhost:8088/patronComments?&userId=${cheekwoodUserObject.id} `
            );
            const CommentArray = await response.json();
            setComments(CommentArray);
        };
        fetchData();
    }, []);
    return (
        <>
            <section >
            <article className="comment_form">
            <h2>Favorites Events</h2>
                    {comments.map((comment) => {
                        return (
                            <UserComment
                                key={`comment__${comment.id}`}
                                id={comment.userId}
                                eventName={comment.event.name}
                                myComment={comment.comment}
                                link={comment.event.linkImage}
                                currentUser={cheekwoodUserObject}
                                commentObject={comment}
                            />
                        );
                    })}
                </article>
            </section>
        </>
    );
};

//     return (
//         <>
//         <h2>Favorites Events</h2>
//         <section className="comments_container">
//                 {comments.map((comment) => {

//                     <UserComment
//                     key={`comment__${comment.id}`}
//                     id={comment.userId}
//                     eventName={comment.event.name}
//                     myComment={comment.comment}
//                     link={comment.event.linkImage}
//                     currentUser={cheekwoodUserObject}
//                     commentObject={comment}
//                 />
//                     return (
//                         <>
//                             <article className="comment_card" key={`comment__${comment.id}`}>
//                                 <h4>{comment.event.name}</h4>
//                                 <p>{comment.comment}</p>
//                                 <img
//                                     src={comment.event.linkImage}
//                                     width="100%"
//                                     height="100%"
//                                     className="comment_image"
//                                 />
//                                 <CommentDelete />
//                             </article>
//                         </>
//                     );
//                 })}
//             </section>
//         </>
//     );
// };

/* ------------sss-------------- */