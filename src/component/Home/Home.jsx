import React from "react";
import "./Home.css";
import vid from "../../assets/video-section.mp4";
// import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <div className="herocontainer">
        <div className="overlay">
          <video src={vid} autoPlay loop muted></video>
          <div className="home-container overlay-container container-self-center">
            <h2 className="mb-24 mb-sm-24 mb-md-20">
              Best <span>PODCASTS</span> <br />
              for Curious Mind
            </h2>
            <h3>Your Daily Dose of Ear Candy</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              suscipit assumenda eveniet corrupti sapiente molestias praesentium
              dolore rerum, hic labore a illo rem ipsum molestiae dolorem
              voluptates dicta eaque. Nam.
            </p>
            <button className="play">
              <i className="fa-solid fa-play"></i>Play Latest Episodes
            </button>
          </div>
          {/* <div className="sectionopt">
            <div className="container">
              <div className="section-content row justify-content-center">
                <div className="col-12 buttons">
                  <ul
                    id="menu"
                    className="menu-subscribe option-menu d-flex flex-wrap"
                  >
                    <li className="label">Listen On:</li>
                    <li id="menu-item1" className="menu-item">
                      <i className="fa-brands fa-spotify"></i>
                      <a href="https://spotify.com">
                        <span>Spotify</span>
                      </a>
                    </li>

                    <li id="menu-item2" className="menu-item">
                      <i className="fa-brands fa-youtube"></i>
                      <a href="https://youtube.com">
                        <span>YouTube</span>
                      </a>
                    </li>

                    <li id="menu-item4" className="menu-item">
                      <i className="fa-solid fa-podcast"></i>
                      <a href="https://podcasts.google.com">
                        <span>Podcasts</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
