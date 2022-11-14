import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LikeButton } from "./footerLike";

export const FooterIMG = () => {
  const [photos, setPhotos] = useState([]);

  /* --------------------------------- */
  const localCheekwoodUser = localStorage.getItem("project_user");
  const cheekwoodUserObject = JSON.parse(localCheekwoodUser);
  // console.log(cheekwoodUserObject);
  /* -------------Display-------------- */
  useEffect(() => {
    const fetchData = async () => {
      /* fetch Ticket */
      const response = await fetch(`http://localhost:8088/instagramImages`);
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
                <div className="footerIMG_image">
                  <LikeButton />
                  <img
                    src={photo.Image}
                    width="100%"
                    height="100%"
                    key={`photo__${photo.id}`}
                  />
                </div>
              </>
            );
          })}
        </article>
      </section>
    </>
  );
};
