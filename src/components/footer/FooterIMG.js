import { useEffect, useState } from "react";

export const FooterIMG = () => {
  const [photos, setPhotos] = useState([]);

  /* --------------------------------- */
  const localCheekwoodUser = localStorage.getItem("project_user");
  const cheekwoodUserObject = JSON.parse(localCheekwoodUser);
  //   console.log(cheekwoodUserObject);
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
                <img
                  key={`photo__${photo.id}`}
                  src={photo.Image}
                  width="10%"
                  height="10%"
                  className="footerIMG_image"
                />
              </>
            );
          })}
        </article>
      </section>
    </>
  );
};
