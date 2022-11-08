import { Footer } from "../footer/Footer";
import "./AboutUs.css";

export const AboutUs = () => {
    return (
        <>
            <section className="about_mainContainer">
                <div className="about_border_1"></div>
                <div>
                    <img
                        src="https://cheekwood.org/wp-content/uploads/2015/07/gardens-1200x425.jpg"
                        className="about_image"
                    />
                    <h1 className="About">About</h1>
                </div>
                <div className="about_border_1"></div>
            </section>
            <section className="about_content">
                <div className="about_p">
                    <p>
                        <h2>About Cheekwood</h2>
                        Cheekwood is a 55-acre botanical garden and art museum
                        located on the historic Cheek estate. Originally built
                        as the home of Leslie and Mabel Cheek in 1929, Cheekwood
                        is one of the finest examples of an American Country
                        Place Era estate. Since being converted into a museum of
                        art and botanical garden in 1960, Cheekwood has
                        presented world-className art exhibitions, spectacular
                        gardens and an historic estate unlike anything else.
                        Each year, Cheekwood welcomes over 400,000 visitors,
                        making it one of the city’s top cultural attractions,
                        with over 20,000 member households. Visitors enjoy
                        family activities, programming for all ages and
                        year-round festivals celebrating the four seasons. From
                        250,000 blooming bulbs in the spring to one mile of
                        holiday lights in the winter, there’s always something
                        to see at Cheekwood.
                    </p>
                </div>
                <div className="about_p">
                    <p>
                        <video
                            controls="controls"
                            width="100%"
                            height="100%"
                            src="https://cheekwood.org/wp-content/uploads/2021/01/a-place-to-wonder_20201215_FINAL_1.mp4"
                        />
                    </p>
                </div>
            </section>
            <hr />

            <fieldset className="about_mvg"></fieldset>
            <div className="about_links">
                <a
                    className="cta"
                    href="https://cheekwood.org/cheekwood-in-the-news/"
                    target="_blank"
                >
                    Press Coverage &amp; Awards
                </a>

                <a
                    className="cta"
                    href="https://cheekwood.org/wp-content/uploads/2022/02/Forward-Momentum-Cheekwood-Strategic-Plan-2022-26_Abridged-Version.pdf"
                    target="_blank"
                >
                    Cheekwood Strategic Plan 2022-26
                </a>
                <a
                    className="cta"
                    href="https://cheekwood.org/wp-content/uploads/2021/09/2020-Annual-Report.pdf"
                    target="_blank"
                >
                    Cheekwood 2020 Annual Report
                </a>
                <a
                    className="cta"
                    href="https://givingmatters.civicore.com/index.php?section=organizations.financials&amp;action=main&amp;fwID=417"
                    target="_blank"
                >
                    Giving Matters Profile
                </a>
                <a
                    className="cta"
                    href="https://www.nps.gov/subjects/nationalregister/index.htm"
                    target="_blank"
                >
                    National Register of Historic Places
                </a>
            </div>
            <hr />
            <div>
                <section className="about_MVGs">
                    <div className="about_MVG">
                        <h2>Mission</h2>
                        <p>
                            Celebrate and preserve Cheekwood as an historical
                            landmark where beauty and excellence in art and
                            horticulture nurture the spirit and serve as
                            inspiration for a diverse and broad audience.
                        </p>
                    </div>
                    <div className="about_MVG">
                        <h2>Vision</h2>
                        <p>
                            Cheekwood will be a locally celebrated and
                            nationally recognized destination renowned for its
                            distinctive beauty, historical significance, and
                            excellence in art and horticulture.
                        </p>
                    </div>
                    <div className="about_MVG">
                        <h2>Guiding Principles</h2>
                        <p>
                            • &nbsp;BEAUTY that nurtures the spirit
                            <br />
                            • PRESERVATION for future generations
                            <br />
                            • EDUCATION that enriches and inspires
                            <br />
                            • COLLABORATION that embraces a broad community
                            <br />• FINANCIAL RESPONSIBILITY in stewarding our
                            resources
                        </p>
                    </div>
                </section>
            </div>
            {Footer()}
           {/*  <footer>
                <div className="about_border_2">
                    <section className="about_footer">
                        <div id="about_address">
                            <h2 className="G_text">Cheekwood</h2>

                            <p className="about_address about_hours">
                                1200 Forrest Park Drive &nbsp;&nbsp;
                                <p className="mobile-break">
                                    Nashville, Tennessee
                                    37205&nbsp;&nbsp;|&nbsp;&nbsp;
                                    <a
                                        className="about_hours G_text"
                                        href="https://www.google.com/maps?ll=36.088169,-86.875976&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=embed&amp;daddr=Cheekwood-Art+%26+Gardens+1200+Forrest+Park+Dr+Nashville,+TN+37205@36.0881693,-86.8759761"
                                        target="_blank"
                                    >
                                        View Map
                                    </a>
                                </p>
                                <br />
                            </p>
                            <p className="about_hours">
                                <a
                                    className="about_hours"
                                    target="_blank"
                                    href="tel:615-356-8000"
                                >
                                    615.356.8000
                                </a>
                                &nbsp;&nbsp;|&nbsp;&nbsp;
                                <a
                                    className="about_hours"
                                    href="mailto:info@cheekwood.org"
                                >
                                    Email Us
                                </a>
                                &nbsp;&nbsp;|&nbsp;&nbsp;
                                <a
                                    className="about_hours"
                                    href="https://cheekwood.org/tickets/"
                                >
                                    SEE ALL HOURS
                                </a>
                            </p>
                        </div>
                    </section>
                    <hr />
                    <section className="icons">
                        <ul>
                            <a
                                target="_blank"
                                alt="Follow Cheekwood on Twitter"
                                title="Follow Cheekwood on Twitter"
                                href="https://twitter.com/Cheekwood"
                            >
                                <span className="icon">
                                    <iconify-icon icon="fa-brands:twitter"></iconify-icon>
                                </span>
                            </a>

                            <a
                                target="_blank"
                                alt="Follow Cheekwood on Instagram"
                                title="Follow Cheekwood on Instagram"
                                href="https://www.instagram.com/cheekwood/"
                            >
                                <span className="icon">
                                    <iconify-icon icon="fa-brands:instagram"></iconify-icon>
                                </span>
                            </a>

                            <a
                                target="_blank"
                                alt="Follow Cheekwood on Snapchat"
                                title="Follow Cheekwood on Snapchat"
                                href="https://www.snapchat.com/add/cheekwood"
                            >
                                <span className="icon">
                                    <iconify-icon icon="fa-brands:snapchat-ghost"></iconify-icon>
                                </span>
                            </a>

                            <a
                                target="_blank"
                                alt="Like Cheekwood on Facebook"
                                title="Like Cheekwood on Facebook"
                                href="https://www.facebook.com/CheekwoodNashville/"
                            >
                                <span className="icon">
                                    <iconify-icon icon="fa-brands:facebook-f"></iconify-icon>
                                </span>
                            </a>
                        </ul>
                    </section>
                </div>
            </footer> */}
        </>
    );
};
//<img width="1200" height="425" src="https://cheekwood.org/wp-content/uploads/2015/07/gardens-1200x425.jpg" className="attachment-full-width size-full-width" alt="" decoding="async" loading="lazy">
/* 
  <style>
    footer nav ul.social li a{
      font-size: 24px;
      color: #a9a9a9;
    }
  </style> */
