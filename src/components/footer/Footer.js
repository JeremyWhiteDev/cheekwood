import { FooterIMG } from "./FooterIMG";
import "./Footer.css";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="about_border_2">
          <section className="footer_container">
            <section className="about_footer">
              <div id="about_address">
                <h2 className="G_text">Cheekwood</h2>

                <p className="about_address about_hours">
                  1200 Forrest Park Drive &nbsp;&nbsp;
                </p>
                <p className="mobile-break about_hours">
                  Nashville, Tennessee 37205&nbsp;&nbsp;|&nbsp;&nbsp;
                  <a
                    className="about_hours G_text"
                    href="https://www.google.com/maps?ll=36.088169,-86.875976&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=embed&amp;daddr=Cheekwood-Art+%26+Gardens+1200+Forrest+Park+Dr+Nashville,+TN+37205@36.0881693,-86.8759761"
                    target="_blank"
                  >
                    View Map
                  </a>
                </p>
                <br />
                <p className="about_hours">
                  <a
                    className="about_hours"
                    target="_blank"
                    href="tel:615-356-8000"
                  >
                    615.356.8000
                  </a>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <a className="about_hours" href="mailto:info@cheekwood.org">
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

            <FooterIMG />
          </section>
          <hr className="hr" />
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
            <div>
              <p className="copyright">©2022 Nss-Hex-Clan</p>
            </div>
          </section>
          <section className=""></section>
        </div>
      </footer>
    </>
  );
};
