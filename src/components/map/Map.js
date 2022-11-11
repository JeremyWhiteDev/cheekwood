import "./Map.css";
//import { Footer } from "../footer/Footer";

export const Map = () => {
    return (
        <>
            <section className="about_mainContainer">
                <div className="about_border_1"></div>
                <div>
                    <img
                        src="https://cheekwood.org/wp-content/uploads/2015/07/4-1200x425.jpg"
                        className="about_image"
                    />
                    <h1 className="About">Cheekwood Map</h1>
                </div>
                <div className="about_border_1"></div>
            </section>

            <section className="map_logo">
                
                <a
                    className="map_link"
                    href="https://cheekwood.org/visit/cheekwood-map/">
                        <img
                            src="https://cheekwood.org/wp-content/themes/cheekwood/images/default.jpg"
                            className="map_image"
                            width="100%"
                            height="100%"
                        />
                    </a>
            

                <h2>
                    <a
                        className="map_cta"
                        href="https://cheekwood.org/wp-content/uploads/2021/09/Cheekwood-Campus-Map.pdf"
                    >
                        Cheekwood <mark>Map</mark>
                    </a>
                </h2>
            </section>
{/* {Footer()} */}
        </>
    );
};
