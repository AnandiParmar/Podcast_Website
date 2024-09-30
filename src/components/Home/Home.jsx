import React from "react";
import styles from "../Home/Home.module.css";
import vid from "../../assets/v2.mp4";
// import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>

      <div className="herocontainer">
        <div className="overlay">
          <video src={vid} autoPlay loop muted></video>
          <div className="home-container overlay-container container-self-center">
            {/* <h2 className="mb-24 mb-sm-24 mb-md-20"> */}
            <div className="herocontainer" id={styles.herocontainer}>
              <div className="overlay" id={styles.overlay}>
                <video
                  src={vid}
                  autoPlay
                  loop
                  muted
                  className="bg-video"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.7)",
                  }}
                ></video>
                <div
                  className="container overlay-container container-self-center"
                  id={styles.bg_container}
                >
                  <h2 className="mb-24 mb-sm-24 mb-md-20 header_title">

                    Best <span>PODCASTS</span> <br />
                    for Curious Mind
                  </h2>
                  <h3 className="header_quote">Your Daily Dose of Ear Candy</h3>
                  <p className="header_content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    suscipit assumenda eveniet corrupti sapiente molestias praesentium
                    dolore rerum, hic labore a illo rem ipsum molestiae dolorem
                    voluptates dicta eaque. Nam.
                  </p>
                  <button className="play" id={styles.play}>
                    <i className="fa-solid fa-play"></i>Play Latest Episodes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
