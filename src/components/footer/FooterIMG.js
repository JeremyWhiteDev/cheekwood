import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const FooterIMG = () => {
    const [photos, setPhotos] = useState([]);

    /* --------------------------------- */
    const localCheekwoodUser = localStorage.getItem("project_user");
    const cheekwoodUserObject = JSON.parse(localCheekwoodUser);
    console.log(cheekwoodUserObject);
    /* -------------Display-------------- */
    useEffect(() => {
        const fetchData = async () => {
            /* fetch Ticket */
            const response = await fetch(
                `http://localhost:8088/instagramImages`
            );
            const photoArray = await response.json();
            setPhotos(photoArray);
        };
        fetchData();
    }, []);
    return (
        <>
            <section>
                <article className="footerIMG_container">
                    <h2 className="icon">from our instagram</h2>
                    {photos.map((photo) => {
                        return (
                            <>
                                <Link to="https://www.instagram.com/cheekwood/">
                                    {" "}
                                    <img
                                        src={photo.Image}
                                        width="10%"
                                        height="10%"
                                        className="footerIMG_image"
                                    />
                                </Link>
                            </>
                        );
                    })}
                </article>
            </section>
        </>
    );
};

/* 
    <section key={id} className="comment_card">
                <h2>{eventName}</h2>
                <p>{myComment}</p>
*/

/* 
img
                    src={link}
                    width="100%"
                    height="100%"
                    className="comment_image"
*/
