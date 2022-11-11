import { useEffect, useState } from "react";
import { CommentDelete } from "./CommentDelete";

//import { UserComment } from "./UserComment";
import "./Profile.css";
export const UserComment = () => {
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
            <section>
            <h2>Favorites Events</h2>
            <section className="comments_container">
                {comments.map((comment) => {
                    return (
                        <article className="comment_card ">
                            <h4>Event Name:{comment.event.name}</h4>
                            <p>{comment.comment}</p>
                            <img
                                src={comment.event.linkImage}
                                width="100%"
                                height="100%"
                                className="comment_image"
                            />
                            <CommentDelete/>
                        </article>
                    );
                })}
                </section>
                </section>
        </>
    );
};
//<section key={`comment__${id}`}>
// import { CommentList } from "./CommentList";
// export const UserComment = ({ id,
//     myComment,
//     eventName,
//     link,
//     currentUser,
//     commentObject,}) => {

//     console.log("My",myComment);

//     return (
//         <>
//             <section key={`comment__${id}`}>
//                 <h4>Event Name:{eventName}</h4>
//                 <p>{myComment}</p>
//                 <img
//                     src={link}
//                     width="100%"
//                     height="100%"
//                     className="comment_image"
//                 />
//                 <>
// {/*                     <CommentEdit
//                         id={id}
//                         eventName={eventName}
//                         myComment={myComment}
//                         link={link}
//                         currentUser={currentUser}
//                         commentObject={commentObject}
//                     /> */}

//                     {/* {deleteButton()} */}
//                 </>
//             </section>
//         </>
//     );
// };
